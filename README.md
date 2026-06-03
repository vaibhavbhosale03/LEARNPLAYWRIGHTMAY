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
  - [Chapter 09: User Input](#chapter-09-user-input)
  - [Chapter 10: Loops](#chapter-10-loops)
  - [Chapter 11: Arrays](#chapter-11-arrays)
  - [Chapter 12: Functions](#chapter-12-functions)
  - [Chapter 13: Strings](#chapter-13-strings)
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
- Hoisting and Temporal Dead Zone
- Functions and control flow
- Naming conventions and comments
- Data types and literals (numbers, strings, `null`, `undefined`, template literals)
- Operators (arithmetic, comparison, logical, ternary, increment/decrement, type)
- Conditional statements (`if-else`, `switch`)
- User input handling in Node.js
- Loops (`for`, `while`, `do...while`)
- Arrays (creation, access, manipulation, searching, iteration, transformation)
- Functions (declaration, expression, arrow functions, IIFE, default and rest parameters)
- Strings (properties, access by index, charAt, charCodeAt)
- VS Code productivity shortcuts

---

## Repository Structure

```
LEARNPLAYWRIGHTMAY/
|
├── Chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_verify_setup.js
│   ├── 04_Hotcode.js
│   └── README.md
│
├── Chapter_02_JS_Concept/
│   ├── 05_JS_Basics.js
│   └── README.md
│
├── Chapter_03_Identifier_Literals/
│   ├── 06_Identifiers_Rules.js
│   ├── 07_Identifiers_Part2.js
│   ├── 08_Comments.js
│   └── README.md
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
│   ├── 17_hoisting_fn.js
│   ├── 18_let_hoisting.js
│   ├── 19_let_hoisting_block.js
│   ├── 20_let_const.js
│   ├── 21_Jr_QA.js
│   └── README.md
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
│   ├── Task13May.js
│   └── README.md
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
│   ├── task18May.js
│   └── README.md
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
│   ├── 56_IQ_Even_Odd.js
│   ├── 57_Grade_calc.js
│   ├── 58_Leap_Year.js
│   ├── task20May.js
│   └── README.md
│
├── Chapter_08_Switch/
│   ├── 59_Switch.js
│   ├── 60_No_Break.js
│   ├── 61_Default.js
│   ├── 62_Real_time_example.js
│   ├── 63_Switch_Group.js
│   ├── 64_IQ.js
│   ├── 65_IQ2.js
│   ├── 66_IQ3.js
│   ├── 67_IQ4.js
│   └── README.md
│
├── Chapter_09_UserInput/
│   ├── 68_User_Inpur.js
│   ├── 69_Node_readline.js
│   ├── 70_prompt_sync.js
│   └── README.md
│
├── Chapter_10_Loops/
│   ├── 71_For_loop.js
│   ├── 72_For_loop.js
│   ├── 73_For_loop2.js
│   ├── 74_IQ.js
│   ├── 75_For_Of_IN_EACH.js
│   ├── 76_While.js
│   ├── 77_Do_While.js
│   ├── 78_Do_While.js
│   ├── 79_IQ.js
│   ├── 80_IQ.js
│   ├── 81_IQ.js
│   └── README.md
│
├── Chapter_11_Arrays/
│   ├── 83_Arrays.js
│   ├── 84_Arrays.js
│   ├── 85_Access_Array.js
│   ├── 86_Arrays_Adding_Remove.js
│   ├── 87_Adding_Remove2.js
│   ├── 88_Real_Example.js
│   ├── 89_Searching.js
│   ├── 90_Iterate.js
│   ├── 91_Transform_Array.js
│   ├── 92_Arrays.js
│   ├── 93_Array_Slicing.js
│   ├── TodaysLearning.js
│   └── README.md
│
├── Chapter_12_Functions/
│   ├── 96_Functions.js
│   ├── 97_Type1_Func_Basic_Fn.js
│   ├── 98_Type2_Func_With_Param_No_Return.js
│   ├── 99_Type3_Fn_without_Param_Return_Type.js
│   ├── 100_Type4_Fn_With_Param_With_Return.js
│   ├── 101_Template_literals.js
│   ├── 102_Fn_Expression.js
│   ├── 103_Arrow_Fn.js
│   ├── 104_Arrow_Fn_Real.js
│   ├── 105_IIFE.js
│   ├── 106_Default_Param_fn.js
│   ├── 107_IQ.js
│   └── 108_Rest_Param_fn.js
│
├── Chapter_13_Strings/
│   ├── 118_Strings.js
│   └── 119_String_Properties.js
│
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

[Read more](./Chapter_01_Basics/README.md)

### Chapter 02: JS Concepts

A quick overview of the three ways to declare variables in JavaScript.

| File | Description |
|------|-------------|
| `05_JS_Basics.js` | Side-by-side comparison of `var`, `let`, and `const` with reassignment. |

[Read more](./Chapter_02_JS_Concept/README.md)

### Chapter 03: Identifiers and Literals

Deep dive into how to name variables correctly, casing conventions, and documentation best practices.

| File | Description |
|------|-------------|
| `06_Identifiers_Rules.js` | **7 golden rules** for valid JavaScript identifiers. |
| `07_Identifiers_Part2.js` | Comprehensive guide to casing styles: camelCase, PascalCase, snake_case, etc. |
| `08_Comments.js` | Masterclass on commenting: single-line, multi-line, JSDoc, inline comments. |

[Read more](./Chapter_03_Identifier_Literals/README.md)

### Chapter 04: JavaScript Concepts

The most critical chapter for any automation engineer. Covers scope, hoisting, and the differences between `var`, `let`, and `const`.

| File | Description |
|------|-------------|
| `09_var_let_const.js` | Variable redeclaration, reassignment, and the "leaked loop counter" problem with `var`. |
| `10_functions.js` | Defining and calling JavaScript functions. |
| `11_var_explained.js` | How `var` behaves inside functions and blocks (function-scoped). |
| `12_let_people_love.js` | Why `let` is preferred: block-scoping, no redeclaration, and shadowing examples. |
| `13_const_explained.js` | `const` rules: block-scoped, no redeclaration, no reassignment. |
| `14_var_functionScope.js` | Detailed function-scope behavior of `var` with nested blocks. |
| `15_let_scope.js` | Detailed block-scope behavior of `let` with nested blocks. |
| `16_hoisting.js` | Understanding hoisting with `var`: declarations are moved to the top by the JS engine. |
| `17_hoisting_fn.js` | Hoisting inside functions. |
| `18_let_hoisting.js` | Temporal Dead Zone (TDZ) with `let` variables. |
| `19_let_hoisting_block.js` | Block scoping and TDZ with global variables. |
| `20_let_const.js` | `const` and Temporal Dead Zone. |
| `21_Jr_QA.js` | Common junior developer mistake: accessing `const` before declaration. |

[Read more](./Chapter_04_Javascript_Concepts/README.md)

### Chapter 05: Literals

Explores JavaScript data types, literals, and how to work with different kinds of values.

| File | Description |
|------|-------------|
| `22_Literal.js` | Introduction to JavaScript literals and primitive data types. |
| `23_null_undefined.js` | Comprehensive guide to `null` vs `undefined` differences. |
| `24_null.js` | Short demonstration of `null` vs `undefined`. |
| `25_Literal_All.js` | Number literals: hex, octal representations. |
| `26_Literal_Number_all.js` | Complete guide to number literals, BigInt, special values, conversions, and edge cases. |
| `27_String.js` | String literals with single and double quotes. |
| `28_Template_Literal.js` | Template literals with variable interpolation for API URLs and Playwright locators. |
| `29_Backtick_single_double.js` | Comparison of quotes and backticks with practical examples. |
| `Task13May.js` | Comprehensive task on hoisting and Temporal Dead Zone. |

[Read more](./Chapter_05_Literal/README.md)

### Chapter 06: Operators

Comprehensive coverage of JavaScript operators essential for writing logical automation scripts.

| File | Description |
|------|-------------|
| `30_Operator.js` | Introduction to assignment operators. |
| `31_Arithmetic_OP.js` | `+`, `-`, `*`, `/` operators. |
| `32_Modulus_OP.js` | Modulus operator `%` and even/odd checking. |
| `33_Expo_op.js` | Exponentiation operator `**`. |
| `34_IQ.js` | Compound assignment operators (`+=`, `-=`, etc.). |
| `35_Comparison_OP.js` | Comparison operators: `==`, `===`, `>`, `<`, `>=`, `<=`. |
| `36_Comparison_Strict_loose.js` | Strict vs loose equality with coercion examples. |
| `38_Confusing_comparison.js` | Tricky comparison scenarios and best practices. |
| `39_Logical_OP.js` | Logical operators: `&&`, `\|\|`, `!`. |
| `40_String_Con_Op.js` | String concatenation with `+=`. |
| `41_Ternary_Op.js` | Ternary operator for concise if-else logic. |
| `42_Type_Op.js` | `typeof` operator for type checking. |
| `43_Incre_Decre_Ops.js` | Pre-increment operator (`++a`). |
| `44_Null_Ops.js` | Nullish coalescing operator (`??`). |
| `45_Post_Increment.js` | Post-increment operator (`a++`). |
| `46_IQ_increment_d.js` | Interview questions on increment/decrement. |
| `47_Advance_ID.js` | Advanced increment/decrement combinations. |
| `task18May.js` | Practice task: finding maximum using ternary operator. |

[Read more](./Chapter_06_Operator/README.md)

### Chapter 07: If-Else

Mastering conditional logic for decision-making in test automation scenarios.

| File | Description |
|------|-------------|
| `48_IF_Else.js` | Introduction to `if-else` conditional statements. |
| `49_if_elseif_else.js` | Chained `if-else if-else` conditions for grading. |
| `50_Real_IF_ELSE.js` | Real-world role-based access control with nested conditions. |
| `51_API_IF_ELSE.js` | Using conditionals to validate API responses. |
| `52_IQ_IF_ELSE.js` | Truthy/falsy values and conditional edge cases. |
| `53_IF_ELSE_real.js` | Login validation with username, password, and account lock. |
| `54_IQ.js` | Simple conditional check example. |
| `55_IE.js` | Single `if` without `else` is valid. |
| `56_IQ_Even_Odd.js` | Even or odd checker using if-else. |
| `57_Grade_calc.js` | Complete grade calculation system. |
| `58_Leap_Year.js` | Leap year determination with proper rules. |
| `task20May.js` | Combined practice: even/odd, grade, leap year. |

[Read more](./Chapter_07_If_Else/README.md)

### Chapter 08: Switch

The `switch` statement as an alternative to multiple `if-else` conditions.

| File | Description |
|------|-------------|
| `59_Switch.js` | Basic `switch` syntax mapping numbers to weekdays. |
| `60_No_Break.js` | Fall-through behavior when `break` is missing. |
| `61_Default.js` | How the `default` case handles unmatched values. |
| `62_Real_time_example.js` | HTTP API response code validation with `switch`. |
| `63_Switch_Group.js` | Grouped cases for categorizing multiple values. |
| `64_IQ.js` | Interview question on fall-through behavior. |
| `65_IQ2.js` | `switch(true)` with boolean expressions for ranges. |
| `66_IQ3.js` | Duplicate case values and unreachable code. |
| `67_IQ4.js` | Strict equality (`===`) behavior in `switch`. |

[Read more](./Chapter_08_Switch/README.md)

### Chapter 09: User Input

Handling user input in Node.js using `readline` and `prompt-sync`.

| File | Description |
|------|-------------|
| `68_User_Inpur.js` | User input with built-in `readline` module (even/odd checker). |
| `69_Node_readline.js` | Reinforces `readline` approach for Node.js input. |
| `70_prompt_sync.js` | Synchronous input using `prompt-sync` npm package. |

[Read more](./Chapter_09_UserInput/README.md)

### Chapter 10: Loops

All loop constructs in JavaScript for repeating actions and iterating over data.

| File | Description |
|------|-------------|
| `71_For_loop.js` | The problem of manual repetition (motivation for loops). |
| `72_For_loop.js` | Basic `for` loop syntax (0 to 5). |
| `73_For_loop2.js` | Loop variable naming flexibility. |
| `74_IQ.js` | `for` loop combined with `if-else` conditions. |
| `75_For_Of_IN_EACH.js` | Introduction to the `while` loop. |
| `76_While.js` | Practical `while` loop examples. |
| `77_Do_While.js` | `do...while` executes at least once. |
| `78_Do_While.js` | Practical retry mechanism using `do...while`. |
| `79_IQ.js` | Reverse/decrementing `while` loop. |
| `80_IQ.js` | `do...while` with immediately false condition. |
| `81_IQ.js` | Reinforces `do...while` "execute at least once" concept. |

[Read more](./Chapter_10_Loops/README.md)

### Chapter 11: Arrays

Covers JavaScript arrays — creating, accessing, modifying, searching, iterating, and transforming ordered collections of data.

| File | Description |
|------|-------------|
| `83_Arrays.js` | Array basics: empty arrays, initialization, index access, mixed types. |
| `84_Arrays.js` | Array creation methods: literals, `new Array()`, `Array.of()`, `Array.from()`. |
| `85_Access_Array.js` | Accessing elements with index and `.at()`, modifying elements. |
| `86_Arrays_Adding_Remove.js` | Adding and removing elements with `push()`, `pop()`, `unshift()`, `shift()`. |
| `87_Adding_Remove2.js` | Advanced manipulation using `splice()` for remove, insert, and replace. |
| `88_Real_Example.js` | Practical browser list example with length, removal, and loop iteration. |
| `89_Searching.js` | Searching arrays with `indexOf()`, `includes()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()`. |
| `90_Iterate.js` | Iteration techniques: `for`, `for...of`, `forEach()`, `for...in`, `entries()`. |
| `91_Transform_Array.js` | Transforming arrays with `map()`, `filter()`, `reduce()`, and `flat()`. |
| `92_Arrays.js` | Sorting arrays with `sort()`, lexical vs natural sorting, ascending and descending order. |
| `93_Array_Slicing.js` | Array slicing with `slice()` — extracting portions using positive and negative indices. |
| `TodaysLearning.js` | Side-by-side comparison: `splice` vs `slice`, `flat` vs `concat` with practical examples and summary tables. |

[Read more](./Chapter_11_Arrays/README.md)

### Chapter 12: Functions

Deep dive into JavaScript functions — from basic declarations to advanced patterns like arrow functions, IIFE, and rest parameters.

| File | Description |
|------|-------------|
| `96_Functions.js` | Introduction to function declaration and calling. |
| `97_Type1_Func_Basic_Fn.js` | Basic function with no parameters and no return value. |
| `98_Type2_Func_With_Param_No_Return.js` | Function with parameters but no return value. |
| `99_Type3_Fn_without_Param_Return_Type.js` | Function with no parameters but with a return value. |
| `100_Type4_Fn_With_Param_With_Return.js` | Function with parameters and a return value. |
| `101_Template_literals.js` | Using template literals inside functions for dynamic string output. |
| `102_Fn_Expression.js` | Function expressions: assigning functions to variables. |
| `103_Arrow_Fn.js` | Arrow functions: concise syntax, implicit returns, single parameter shorthand. |
| `104_Arrow_Fn_Real.js` | Real-world example: validating HTTP status codes using regular, expression, and arrow functions. |
| `105_IIFE.js` | Immediately Invoked Function Expressions (IIFE) for isolated execution blocks. |
| `106_Default_Param_fn.js` | Default parameters for fallback values in function arguments. |
| `107_IQ.js` | Interview question: formatting test results using functions. |
| `108_Rest_Param_fn.js` | Rest parameters (`...args`) for handling variable numbers of arguments. |

### Chapter 13: Strings

Working with JavaScript strings: properties, indexing, and built-in methods.

| File | Description |
|------|-------------|
| `118_Strings.js` | Introduction to JavaScript strings. |
| `119_String_Properties.js` | String properties and access: `length`, index access, `charAt()`, `charCodeAt()`. |

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
   node Chapter_09_UserInput/69_Node_readline.js
   ```

3. **For prompt-sync based input:**
   ```bash
   npm install prompt-sync
   node Chapter_09_UserInput/70_prompt_sync.js
   ```

4. **Experiment!** Modify the code, add breakpoints, and observe the output to reinforce your learning.

---

## Learning Outcomes

After completing this repository, you will be able to:

- Write clean, well-commented JavaScript code following industry naming conventions.
- Choose the correct variable declaration (`var`, `let`, or `const`) for any scenario.
- Predict and avoid bugs caused by JavaScript scope and hoisting.
- Work with different data types, literals, and template strings effectively.
- Use arithmetic, comparison, logical, and ternary operators confidently.
- Build decision-making logic using `if-else` and `switch` statements.
- Handle user input in Node.js scripts.
- Use `for`, `while`, and `do...while` loops for repetitive tasks.
- Create, modify, search, iterate, and transform JavaScript arrays effectively.
- Write and call functions using declarations, expressions, and arrow functions.
- Apply advanced function patterns: IIFE, default parameters, and rest parameters.
- Work with JavaScript strings: access characters, use `length`, `charAt()`, and `charCodeAt()`.
- Navigate VS Code efficiently using keyboard shortcuts.
- Be fully prepared to start learning **Playwright** for web test automation.

---

## Author

**Vaibhav Bhosale**

- GitHub: [@vaibhavbhosale03](https://github.com/vaibhavbhosale03)
- Course: [The Testing Academy](https://www.thetestingacademy.com/)

---

*Happy Learning & Happy Testing!*
