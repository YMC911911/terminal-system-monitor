import os from "node:os";
import blessed from "blessed";
import * as contrib from "blessed-contrib";
import chalk from "chalk";
import { exec } from "node:child_process";

const screen = blessed.screen({
  smartCSR: true,
  title: "Krishna System Monitor"
});

const grid = new contrib.grid({ rows: 12, cols: 12, screen });


const cpuGraph = grid.set(0, 0, 6, 12, contrib.line, {
  label: chalk.blue.bold(" CPU Usage (%) "),
  showLegend: true,
  legend: { width: 10 }
});

const cpuTable = grid.set(6, 0, 3, 6, contrib.table, {
  label: chalk.blue.bold(" CPU Per Core "),
  columnWidth: [12, 12]
});

const memoryBox = grid.set(6, 6, 3, 6, blessed.box, {
  label: chalk.magenta.bold(" Memory "),
  tags: true,
  content: ""
});

const diskBox = grid.set(9, 6, 3, 6, blessed.box, {
  label: chalk.green.bold(" Disk Space "),
  tags: true,
  content: ""
});

const infoBox = grid.set(9, 0, 3, 6, blessed.box, {
  label: chalk.yellow.bold(" System Info "),
  tags: true,
  content: ""
});


let history = Array(30).fill(0);
let prevCPUs = os.cpus();

function calcCPU(oldCpu, newCpu) {
  const oldTotal = Object.values(oldCpu.times).reduce((a, b) => a + b);
  const newTotal = Object.values(newCpu.times).reduce((a, b) => a + b);

  const idleDiff = newCpu.times.idle - oldCpu.times.idle;
  const totalDiff = newTotal - oldTotal;

  return ((1 - idleDiff / totalDiff) * 100).toFixed(1);
}

function colorPercent(value) {
  value = Number(value);
  if (value < 40) return chalk.green(value + "%");
  if (value < 70) return chalk.yellow(value + "%");
  return chalk.red(value + "%");
}

function bytesGB(bytes) {
  return (bytes / 1024 ** 3).toFixed(2);
}

function update() {
  const newCPUs = os.cpus();

  const perCore = newCPUs.map((cpu, i) =>
    calcCPU(prevCPUs[i], cpu)
  );

  prevCPUs = newCPUs;

  const avgCPU =
    perCore.reduce((a, b) => a + Number(b), 0) / perCore.length;

  history.push(avgCPU);
  history.shift();

  cpuGraph.setData([
    {
      title: "CPU",
      x: history.map((_, i) => i.toString()),
      y: history.map(Number),
      style: { line: "cyan" }
    }
  ]);

  cpuTable.setData({
    headers: ["Core", "Usage"],
    data: perCore.map((v, i) => [`CPU ${i}`, colorPercent(v)])
  });
  
  const total = os.totalmem();
  const free = os.freemem();
  const used = total - free;
  const percent = ((used / total) * 100).toFixed(1);

  memoryBox.setContent(
    chalk.bold(" Memory Usage:\n\n") +
    `Used : ${chalk.cyan(bytesGB(used))} GB\n` +
    `Free : ${chalk.green(bytesGB(free))} GB\n` +
    `Total: ${chalk.white(bytesGB(total))} GB\n\n` +
    `Status: ${colorPercent(percent)}`
  );

  exec("wmic logicaldisk get size,freespace,caption", (err, stdout) => {
    if (err || !stdout.trim()) {
      diskBox.setContent(chalk.red("Disk data unavailable"));
      return;
    }

    const lines = stdout.trim().split("\n").slice(1);
    let output = "";

    lines.forEach(line => {
      const parts = line.trim().split(/\s+/);
      if (parts.length < 3) return;

      const [caption, free, size] = parts;

      const freeNum = Number(free);
      const sizeNum = Number(size);
      const usedNum = sizeNum - freeNum;
      const percent = ((usedNum / sizeNum) * 100).toFixed(1);

      output +=
        chalk.bold(`Drive: ${caption}\n`) +
        `Total: ${chalk.white(bytesGB(sizeNum))} GB\n` +
        `Used : ${chalk.red(bytesGB(usedNum))} GB\n` +
        `Free : ${chalk.green(bytesGB(freeNum))} GB\n` +
        `Usage: ${colorPercent(percent)}\n\n`;
    });

    diskBox.setContent(output);
    screen.render();
  });

  infoBox.setContent(
    chalk.bold(" OS: ") + chalk.blue(`${os.type()} ${os.release()}\n`) +
    chalk.bold(" CPU: ") + chalk.green(newCPUs[0].model) + "\n" +
    chalk.bold(" Cores: ") + chalk.yellow(newCPUs.length + "\n") +
    chalk.bold(" Avg CPU: ") + colorPercent(avgCPU.toFixed(1)) + "\n" +
    chalk.bold(" Uptime: ") + chalk.magenta((os.uptime() / 3600).toFixed(2) + " hrs")
  );

  screen.render();
}

setInterval(update, 1000);

screen.key(["escape", "q", "C-c"], () => process.exit(0));
