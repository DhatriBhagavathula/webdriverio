# Wonderous – WebdriverIO Canvas Automation

This project contains **UI automation tests** for the **Wonderous Flutter Web application**, which is rendered using a **canvas** instead of traditional HTML elements.

---

## Application Under Test

- **Application Name:** Wonderous
- **Type:** Flutter Web (Canvas-rendered UI)
- **URL:** https://wonderous.app/web/#/home

---

## Key Challenge

The Wonderous application does **not expose HTML elements** such as buttons or links.

- UI is rendered on a **single canvas**
- DOM-based selectors (`id`, `css`, `xpath`) cannot be used
- Tests interact with the application using **screen-level user actions**

---

## Testing Strategy

### Interaction
- Coordinate-based mouse clicks
- Swipe gestures using pointer actions
- Scroll actions using mouse wheel simulation

### Validation
- Application stability
- Navigation behavior
- URL changes after user actions
- Canvas presence

This approach is similar to **mobile app or game UI testing**.

---

## Tech Stack

- **Automation Tool:** WebdriverIO
- **Language:** JavaScript
- **Test Framework:** Mocha
- **Browser:** Google Chrome (Headless)
- **Platform:** Docker
- **OS (Container):** Linux
- **Reporter:** Spec Reporter

---

## Project Structure

wonderous-wdio/
│
├── test/
│   └── specs/
│
├── wdio.conf.js
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md

## Run tests using Docker Compose
docker compose up --build