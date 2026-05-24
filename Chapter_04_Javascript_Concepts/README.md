# Chapter 04: JavaScript Concepts

The most critical chapter for any automation engineer. Covers scope, hoisting, and the differences between `var`, `let`, and `const`.

## Files

### 09_var_let_const.js
Introduces `var`, `let`, and `const` together. Demonstrates that `var` allows redeclaration and reassignment. Shows the classic "leaked loop counter" problem where `var i` leaks outside the `for` loop.

### 10_functions.js
The most basic function demonstration. Shows how to define a named function using the `function` keyword and call it multiple times.

### 11_var_explained.js
Explains `var`'s **function-scoped** behavior. Shows that `var` inside an `if` block does NOT create a new scope - it overwrites the function-level variable.

### 12_let_people_love.js
Explains `let`'s **block-scoped** behavior:
- Allows reassignment but NOT redeclaration in the same scope
- Variables inside blocks (`if`, `{}`) are confined to those blocks
- Demonstrates block-level variable shadowing

### 13_const_explained.js
Introduces `const` for declaring constants:
- Block-scoped
- No redeclaration
- No reassignment
- Realistic example: `BASE_URL` for API endpoints

### 14_var_functionScope.js
Another demonstration of `var`'s function scope. `var a = 30` inside `if` overwrites `var a = 20` at the function level. Reinforces that `var` ignores block boundaries but respects function boundaries.

### 15_let_scope.js
Contrasts with file 14 by showing `let`'s block scope:
- `let a = 30` inside `if` is separate from `let a = 20` in the function
- After `if` block, function-level `a` remains `20`
- Global `a` remains `10`

### 16_hoisting.js
Explains **hoisting** - `var` declarations are moved to the top during compilation, but only the declaration (not the assignment). Shows why `console.log(greeting)` before `var greeting = "Hello"` prints `undefined`.

### 17_hoisting_fn.js
Demonstrates hoisting inside function scopes. `var status_code` is hoisted to the top of `getUserStatus()`, not the global scope.

### 18_let_hoisting.js
Explains how `let` variables are hoisted but placed in the **Temporal Dead Zone (TDZ)**. Accessing them before declaration throws a `ReferenceError` instead of returning `undefined`.

### 19_let_hoisting_block.js
Further demonstrates block scoping and TDZ. Even with a global `x`, the `let x` inside `if` creates a new binding, and accessing it during TDZ throws an error.

### 20_let_const.js
Shows that `const` variables, like `let`, are subject to the Temporal Dead Zone.

### 21_Jr_QA.js
A practical example of a common junior developer mistake - trying to access a `const` variable before its declaration. Uses a realistic constant name for an API endpoint.

## How to Run
```bash
node 09_var_let_const.js
node 10_functions.js
node 11_var_explained.js
# ... and so on for each file
```
