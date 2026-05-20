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
  - [Chapter 05: Literals](#chapter-05-literals)
  - [Chapter 06: Operators](#chapter-06-operators)
  - [Chapter 07: If-Else](#chapter-07-if-else)
  - [Chapter 08: Switch](#chapter-08-switch)
- [VS Code Shortcuts](#vs-code-shortcuts)
- [Prerequisites](#prerequisites)
- [How to Run](#how-to-run)
- [Learning Outcomes](#learning-outcomes)
- [Author](#author)

---

## Overview

This repository contains hands-on JavaScript exercises and notes aimed at testers and QA engineers who want to master **Playwright** for end-to-end web automation. Before writing robust Playwright scripts, it is essential to understand the core JavaScript concepts that power them. Each file in this repo is a focused lesson with practical code examples.

The repository is organized into progressive chapters covering JavaScript fundamentals from basic syntax to control flow structures. Every chapter builds on the previous one, making it easy to follow along and practice.

**Key Topics Covered:**
- JavaScript syntax and environment setup
- Variable declarations (`var`, `let`, `const`)
- Scope (global, function, block)
- Hoisting
- Functions and control flow
- Naming conventions and comments
- Data types and literals (numbers, strings, `null`, `undefined`, template literals)
- Operators (arithmetic, comparison, logical, ternary, increment/decrement, type)
- Conditional statements (`if-else`, `switch`)
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
├── Chapter_05_Literal/
│   ├── 22_Literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_Literal_All.js
│   ├── 26_Literal_Number_all.js
│   ├── 27_String.js
│   ├── 28_Template_Literal.js
│   ├── 29_Backtick_single_double.js
│   └── Task13May.js
│
├── Chapter_06_Operator/
│   ├── 30_Operator.js
│   ├── 31_Arithmetic_OP.js
│   ├── 32_Modulus_OP.js
│   ├── 33_Expo_op.js
│   ├── 34_IQ.js
│   ├── 35_Comparison_OP.js
│   ├── 36_Comparison_Strict_loose.js
│   ├── 38_Confusing_comparison.js
│   ├── 39_Logical_OP.js
│   ├── 40_String_Con_Op.js
│   ├── 41_Ternary_Op.js
│   ├── 42_Type_Op.js
│   ├── 43_Incre_Decre_Ops.js
│   ├── 44_Null_Ops.js
│   ├── 45_Post_Increment.js
│   ├── 46_IQ_increment_d.js
│   ├── 47_Advance_ID.js
│   └── task18May.js
│
├── Chapter_07_If_Else/
│   ├── 48_IF_Else.js
│   ├── 49_if_elseif_else.js
│   ├── 50_Real_IF_ELSE.js
│   ├── 51_API_IF_ELSE.js
│   ├── 52_IQ_IF_ELSE.js
│   ├── 53_IF_ELSE_real.js
│   ├── 54_IQ.js
│   ├── 55_IE.js
│   └── task20May.js
│
└── Chapter_08_Switch/
    └── (Coming soon...)

├── VSCode_Shortcuts_Windows.md
└── README.md
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

### Chapter 05: Literals

Explores JavaScript data types, literals, and how to work with different kinds of values.

| File | Description |
|------|-------------|
| `22_Literal.js` | Introduction to JavaScript literals and primitive data types. |
| `23_null_undefined.js` | Understanding the difference between `null` and `undefined`. |
| `24_null.js` | Deep dive into `null` as a deliberate absence of value. |
| `25_Literal_All.js` | Overview of all literal types in JavaScript. |
| `26_Literal_Number_all.js` | Working with number literals, integers, floats, and special numeric values. |
| `27_String.js` | String literals, escape sequences, and common string operations. |
| `28_Template_Literal.js` | Using template literals (backticks) for string interpolation and multiline strings. |
| `29_Backtick_single_double.js` | Comparison of single quotes, double quotes, and backticks in JavaScript. |
| `Task13May.js` | Practice task for literals and data types. |

### Chapter 06: Operators

Comprehensive coverage of JavaScript operators essential for writing logical automation scripts.

| File | Description |
|------|-------------|
| `30_Operator.js` | Introduction to JavaScript operators. |
| `31_Arithmetic_OP.js` | Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**`. |
| `32_Modulus_OP.js` | Deep dive into the modulus (remainder) operator. |
| `33_Expo_op.js` | Exponentiation operator (`**`). |
| `34_IQ.js` | IQ and tricky questions on operators. |
| `35_Comparison_OP.js` | Comparison operators: `==`, `!=`, `>`, `<`, `>=`, `<=`. |
| `36_Comparison_Strict_loose.js` | Strict equality (`===`) vs. loose equality (`==`). |
| `38_Confusing_comparison.js` | Tricky comparison scenarios and type coercion pitfalls. |
| `39_Logical_OP.js` | Logical operators: `&&`, `\|\|`, `!`. |
| `40_String_Con_Op.js` | String concatenation operators and techniques. |
| `41_Ternary_Op.js` | Ternary (conditional) operator for concise if-else logic. |
| `42_Type_Op.js` | Type-checking operators: `typeof` and `instanceof`. |
| `43_Incre_Decre_Ops.js` | Increment (`++`) and decrement (`--`) operators. |
| `44_Null_Ops.js` | Nullish coalescing (`??`) and optional chaining (`?.`). |
| `45_Post_Increment.js` | Post-increment vs. pre-increment behavior. |
| `46_IQ_increment_d.js` | IQ questions on increment/decrement operators. |
| `47_Advance_ID.js` | Advanced operator concepts and edge cases. |
| `task18May.js` | Practice task for operators (18 May). |

### Chapter 07: If-Else

Mastering conditional logic for decision-making in test automation scenarios.

| File | Description |
|------|-------------|
| `48_IF_Else.js` | Introduction to `if-else` conditional statements. |
| `49_if_elseif_else.js` | Chained `if-else if-else` conditions. |
| `50_Real_IF_ELSE.js` | Real-world examples using `if-else`. |
| `51_API_IF_ELSE.js` | Using conditionals to validate API responses. |
| `52_IQ_IF_ELSE.js` | Tricky questions and edge cases with conditionals. |
| `53_IF_ELSE_real.js` | More practical `if-else` examples for automation. |
| `54_IQ.js` | Additional IQ questions on conditionals. |
| `55_IE.js` | Internet Explorer / browser-specific conditional logic. |
| `task20May.js` | Practice task for if-else (20 May). |

### Chapter 08: Switch

*(Coming soon...)*

This chapter will cover the `switch` statement as an alternative to multiple `if-else` conditions, useful for handling multiple discrete values in test scenarios.

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
- Work with different data types, literals, and template strings effectively.
- Use arithmetic, comparison, logical, and ternary operators confidently.
- Build decision-making logic using `if-else` and `switch` statements.
- Navigate VS Code efficiently using keyboard shortcuts.
- Be fully prepared to start learning **Playwright** for web test automation.

---

## Author

**Vaibhav Bhosale**

- GitHub: [@vaibhavbhosale03](https://github.com/vaibhavbhosale03)
- Course: [The Testing Academy](https://www.thetestingacademy.com/)

---

*Happy Learning & Happy Testing!*
