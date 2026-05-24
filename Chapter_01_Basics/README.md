# Chapter 01: Basics

This folder contains the very first JavaScript files for beginners. It introduces basic syntax, console output, and environment verification.

## Files

### 01_Basics.js
A simple introductory script that prints a welcome message and declares a variable.
- Uses `console.log()` to output text
- Declares a variable using `let`

### 02_JS.js
Demonstrates loops, functions, and variable shadowing.
- Declares a variable `a` with value `10`
- Uses a `for` loop that runs 100,000 times
- Calls a `print()` function inside the loop
- Shows variable shadowing (loop `a` is separate from outer `a`)

### 03_JS_verify_setup.js
A setup verification script for Node.js environment.
- Prints `process.platform` (darwin/win32/linux)
- Prints `process.arch` (x64/arm64)
- Prints `process.version` (Node.js version)

### 04_Hotcode.js
Demonstrates function definition with parameters and return values.
- Defines an `add(a, b)` function
- Calls it 10,000 times inside a loop
- Shows function reusability and basic arithmetic

## How to Run
```bash
node 01_Basics.js
node 02_JS.js
node 03_JS_verify_setup.js
node 04_Hotcode.js
```
