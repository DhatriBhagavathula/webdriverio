# WebdriverIO Automation Portfolio

This repository contains **multiple UI automation projects** implemented using **WebdriverIO**.  
Each project is maintained as a **separate, self-contained automation suite**, but they are grouped together in a single repository for **easy portfolio management and comparison**.

---

## Projects in This Repository

### Projectweb – Web Application Automation
Folder: `Projectweb/`

- Automation for a **standard web application**
- Uses **DOM-based selectors**
- Covers:
  - Functional testing
  - End-to-end scenarios
- Fully **Dockerized**
- Can be executed using a **single Docker command**

**Tech stack:**
- WebdriverIO
- Typescript
- Mocha
- Chrome
- Docker

---

### Wonderous – Canvas-Based Automation
Folder: `wonderous/`

- Automation for the **Wonderous Flutter Web application**
- UI is rendered using a **canvas** (no HTML elements)
- Automation is done using:
  - Coordinate-based clicks
  - Gesture simulation (swipe, scroll)
- Fully **Dockerized**
- Executable using **one Docker Compose command**

**Tech stack:**
- WebdriverIO
- JavaScript
- Mocha
- Chrome (Headless)
- Docker

---

## Docker Support

Each project has its **own Docker configuration** and can be executed independently.

(Inside each project folder):

```bash
docker compose up --build
