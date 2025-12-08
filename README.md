# Terminal System Monitor 🔧 (Built with Node.js)
A real-time terminal dashboard providing CPU, memory, disk, and system insights.


![Node.js](https://img.shields.io/badge/Node.js-18%2B-3C873A?style=for-the-badge&logo=node.js)
![Blessed-Contrib](https://img.shields.io/badge/blessed--contrib-TUI%20Dashboard-blue?style=for-the-badge)
![Chalk](https://img.shields.io/badge/Chalk-Colorful%20CLI-yellow?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Windows-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

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

This project is licensed under the **MIT License**.

© 2025 Krishna Chauhan.  
You are free to use, modify, and distribute this software, provided that proper credit is given.  
The software is provided **as-is**, without any warranty of any kind.

---
<p align="center">© 2025 Krishna Chauhan | Built with ❤️</p>

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dmprOGRmcXhlM285cW0xcnMwbXM5bHBjeGgwcjY1emNreDVmcWxvaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cFdHXXm5GhJsc/giphy.gif" width="260px" alt="animated monitor"/>
</p>

