# WebdriverIO Automation Testing Project

This repository contains UI automation test scripts developed using WebdriverIO.
The framework follows the Page Object Model (POM) approach for better maintainability.

---

## Tools & Technologies Used
- WebdriverIO
- JavaScript / TypeScript
- Mocha
- Node.js
- Git

---

## Project Structure
test/
- specs        → Test case files
- pageobjects  → Page Object files
- data         → Test data files

wdio.conf.ts   → WebdriverIO configuration file  
package.json   → Project dependencies  

---

## Steps to Run the Project

### Step 1: Install Required Software
Before running the project, make sure the following software is installed on your system:
1. Node.js
2. npm
3. Git

---

### Step 2: Run Automation Tests
Run All Test Files:
npx wdio run wdio.conf.ts

Run a Specific Test File
npx wdio run wdio.conf.ts --spec test/specs/file_name.e2e.ts

### Steps to Run Using Docker 

### Prerequisite
- Docker must be installed on the system

### Run Automation Tests (Single Command)
From the project root directory, run:

```bash
docker compose up --build