# Terminal System Monitor

A real-time terminal system monitor built using Node.js, blessed-contrib, and chalk.  
Displays CPU usage, per-core stats, memory usage, disk usage, and system info in a colorful TUI dashboard.

---

## Screenshot

![Terminal Monitor](https://res.cloudinary.com/dqumagamd/image/upload/v1765187277/Screenshot_368_qiurie.png)

---

## Features

- Live CPU usage graph  
- Per-core CPU usage table  
- Memory usage with color-coded alerts  
- Disk space (using WMIC – works on Windows without dependencies)  
- System information (OS, uptime, CPU model, core count)  
- Fully colorful UI using chalk  
- No native modules → no node-gyp errors  
- Works on all Windows terminals (PowerShell, Windows Terminal)

---

## Installation

```bash
git clone https://github.com/krishnapschauhan/terminal-system-monitor.git
cd terminal-system-monitor
npm install
```

---

## Run

```bash
npm start
```

or:

```bash
node index.js
```

---

## Requirements

- Windows OS (disk usage uses `wmic`)
- Node.js 16+ (recommended 18+)
- PowerShell or Windows Terminal (better UI rendering)

---

## Project Structure

```
terminal-system-monitor/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## License

MIT License  
Copyright (c) 2025 Krishna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...

(You may keep or replace this with your LICENSE file.)

---

## Author

Developed by **Krishna**  
GitHub: https://github.com/krishnapschauhan
