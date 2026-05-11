# LEARNPLAYWRIGHTMAY

> **A beginner-friendly JavaScript fundamentals repository built for learning Playwright test automation.**
> This repository was created during the May cohort at [The Testing Academy](https://www.thetestingacademy.com/) to build a strong foundation in JavaScript before diving into Playwright.

---

## Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Chapters](#chapters)
  - [Chapter 01: Basics](#chapter-01-basics)
  - [Chapter 02: JS Concepts](#chapter-02-js-concepts)
  - [Chapter 03: Identifiers and Literals](#chapter-03-identifiers-and-literals)
  - [Chapter 04: JavaScript Concepts](#chapter-04-javascript-concepts)
- [VS Code Shortcuts](#vs-code-shortcuts)
- [Prerequisites](#prerequisites)
- [How to Run](#how-to-run)
- [Learning Outcomes](#learning-outcomes)
- [Author](#author)

---

## Overview

This repository contains hands-on JavaScript exercises and notes aimed at testers and QA engineers who want to master **Playwright** for end-to-end web automation. Before writing robust Playwright scripts, it is essential to understand the core JavaScript concepts that power them. Each file in this repo is a focused lesson with practical code examples.

**Key Topics Covered:**
- JavaScript syntax and environment setup
- Variable declarations (`var`, `let`, `const`)
- Scope (global, function, block)
- Hoisting
- Functions and control flow
- Naming conventions and comments
- VS Code productivity shortcuts

---

## Repository Structure

```
LEARNPLAYWRIGHTMAY/
│
├── Chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_verify_setup.js
│   └── 04_Hotcode.js
│
├── Chapter_02_JS_Concept/
│   └── 05_JS_Basics.js
│
├── Chapter_03_Identifier_Literals/
│   ├── 06_Identifiers_Rules.js
│   ├── 07_Identifiers_Part2.js
│   └── 08_Comments.js
│
├── Chapter_04_Javascript_Concepts/
│   ├── 09_var_let_const.js
│   ├── 10_functions.js
│   ├── 11_var_explained.js
│   ├── 12_let_people_love.js
│   ├── 13_const_explained.js
│   ├── 14_var_functionScope.js
│   ├── 15_let_scope.js
│   ├── 16_hoisting.js
│   └── 17_hoisting_fn.js
│
└── VSCode_Shortcuts_Windows.md
```

---

## Chapters

### Chapter 01: Basics

Introduction to JavaScript syntax, console output, and verifying the local Node.js environment.

| File | Description |
|------|-------------|
| `01_Basics.js` | First `console.log` and variable declaration with `let`. |
| `02_JS.js` | Loops, functions, and basic control flow. |
| `03_JS_verify_setup.js` | Verify Node.js setup by printing `process.platform`, `process.arch`, and `process.version`. |
| `04_Hotcode.js` | Demonstrates function calls inside a loop and performance awareness. |

### Chapter 02: JS Concepts

A quick overview of the three ways to declare variables in JavaScript.

| File | Description |
|------|-------------|
| `05_JS_Basics.js` | Side-by-side comparison of `var`, `let`, and `const` with reassignment. |

### Chapter 03: Identifiers and Literals

Deep dive into how to name variables correctly, casing conventions, and documentation best practices.

| File | Description |
|------|-------------|
| `06_Identifiers_Rules.js` | **7 golden rules** for valid JavaScript identifiers: allowed characters, reserved words, case sensitivity, Unicode, and naming best practices. |
| `07_Identifiers_Part2.js` | Comprehensive guide to casing styles: `camelCase`, `PascalCase`, `snake_case`, `SCREAMING_SNAKE_CASE`, `kebab-case`, `Train-Case`, Hungarian notation, and more. |
| `08_Comments.js` | Masterclass on commenting: single-line, multi-line, JSDoc/Javadoc, inline comments, file headers, and tricky edge cases. |

### Chapter 04: JavaScript Concepts

The most critical chapter for any automation engineer. Covers scope, hoisting, and the differences between `var`, `let`, and `const`.

| File | Description |
|------|-------------|
| `09_var_let_const.js` | Practical example of variable redeclaration, reassignment, and the classic "leaked loop counter" problem with `var`. |
| `10_functions.js` | Defining and calling JavaScript functions. |
| `11_var_explained.js` | How `var` behaves inside functions and blocks (function-scoped). |
| `12_let_people_love.js` | Why `let` is preferred: block-scoping, no redeclaration, and shadowing examples. |
| `13_const_explained.js` | `const` rules: block-scoped, no redeclaration, no reassignment. |
| `14_var_functionScope.js` | Detailed function-scope behavior of `var` with nested blocks. |
| `15_let_scope.js` | Detailed block-scope behavior of `let` with nested blocks. |
| `16_hoisting.js` | Understanding hoisting with `var`: declarations are moved to the top by the JS engine. |
| `17_hoisting_fn.js` | Hoisting inside functions: `var` is hoisted to the top of its enclosing function, not the global scope. |

---

## VS Code Shortcuts

The repository includes a comprehensive cheat sheet for **Visual Studio Code on Windows**:

- General shortcuts (Command Palette, Terminal, Settings)
- Basic editing (Cut, Copy, Move Lines, Comments, Formatting)
- Navigation (Go to Line, Symbol, Matching Bracket)
- Search and Replace (Find, Regex, Replace in Files)
- Multi-cursor and Selection
- Rich Languages Editing (IntelliSense, Go to Definition, Rename)
- Editor Management
- File Management
- Display and Zoom
- Debug controls
- Integrated Terminal shortcuts

See [`VSCode_Shortcuts_Windows.md`](./VSCode_Shortcuts_Windows.md) for the full list.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- Any code editor (recommended: [VS Code](https://code.visualstudio.com/))
- Basic understanding of programming concepts (helpful but not mandatory)

---

## How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vaibhavbhosale03/LEARNPLAYWRIGHTMAY.git
   cd LEARNPLAYWRIGHTMAY
   ```

2. **Run any JavaScript file using Node.js:**
   ```bash
   node Chapter_01_Basics/01_Basics.js
   node Chapter_04_Javascript_Concepts/16_hoisting.js
   ```

3. **Experiment!** Modify the code, add breakpoints, and observe the output to reinforce your learning.

---

## Learning Outcomes

After completing this repository, you will be able to:

- Write clean, well-commented JavaScript code following industry naming conventions.
- Choose the correct variable declaration (`var`, `let`, or `const`) for any scenario.
- Predict and avoid bugs caused by JavaScript scope and hoisting.
- Navigate VS Code efficiently using keyboard shortcuts.
- Be fully prepared to start learning **Playwright** for web test automation.

---

## Author

**Vaibhav Bhosale**

- GitHub: [@vaibhavbhosale03](https://github.com/vaibhavbhosale03)
- Course: [The Testing Academy](https://www.thetestingacademy.com/)

---

*Happy Learning & Happy Testing!* 
