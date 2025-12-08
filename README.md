# Terminal System Monitor 🔧
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

MIT License  
Copyright (c) 2025 Krishna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...

(You may keep or replace this with your LICENSE file.)

---

## Author

Developed by **Krishna**  
GitHub: https://github.com/krishnapschauhan
