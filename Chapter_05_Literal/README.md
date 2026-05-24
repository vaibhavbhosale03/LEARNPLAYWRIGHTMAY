# Chapter 05: Literals

This folder explores JavaScript data types, literals, and how to work with different kinds of values including numbers, strings, null, undefined, and template literals.

## Files

### 22_Literal.js
Introduction to JavaScript literals and primitive data types:
- String literal: `"pramod"`
- Boolean literal: `true`
- Numeric literal: `3.14`
- Null literal: `null`
- Undefined: variable declared but not assigned
- Uses `typeof` operator to check data types

### 23_null_undefined.js
A comprehensive deep-dive into `null` vs `undefined`:
- **Undefined**: variable declared but not assigned, function with no return, missing object property, out-of-bounds array index
- **Null**: intentional absence of value, must be explicitly assigned
- **Type checking**: `typeof null` returns `"object"` (known JS bug!)
- **Comparison**: `null == undefined` is `true`, but `null === undefined` is `false`
- Practical examples: API responses, form fields, cleanup
- Best practices: use `??` (nullish coalescing) for defaults

### 24_null.js
A short file demonstrating `null` vs `undefined` with simple examples, plus `typeof` checks on empty string and zero.

### 25_Literal_All.js
Overview of number literals including hexadecimal (`0xFF`) and octal (`0o77`) representations.

### 26_Literal_Number_all.js
A complete guide to number literals in JavaScript:
- Integer literals (decimal)
- Floating-point literals
- Exponential notation (scientific): `1e6`, `1e-6`
- Hexadecimal literals: `0xFF`
- Binary literals: `0b1010`
- Octal literals: `0o77`
- BigInt literals: `123n`
- Numeric separators: `1_000_000`
- Special values: `Infinity`, `NaN`
- Number properties: `MAX_VALUE`, `MAX_SAFE_INTEGER`, `EPSILON`
- Conversions: `parseInt()`, `parseFloat()`, `Number()`, `.toString()`
- Edge cases: `0.1 + 0.2 !== 0.3`, `NaN !== NaN`

### 27_String.js
String literals and quotes:
- Single quotes: `'Hello World'`
- Double quotes: `"Hello World"`
- Using one type of quote to avoid escaping the other
- `typeof` on single character vs string

### 28_Template_Literal.js
Using backticks (`` ` ``) for template literals:
- String interpolation: `` `Hi ${firstname}` ``
- Dynamic URL building for API testing
- Playwright locator expressions with variables
- Log formatting with embedded variables
- Screenshot path generation with timestamps

### 29_Backtick_single_double.js
Comprehensive comparison of single quotes, double quotes, and backticks:
- Single/double quotes are interchangeable
- Backticks allow variable interpolation with `${}`
- Backticks allow multi-line strings
- No need to escape quotes inside backticks
- HTML template generation with backticks
- Common mistake: using `${}` inside regular quotes

### Task13May.js
A comprehensive task explaining Hoisting and Temporal Dead Zone (TDZ):
- How JavaScript reads code in two phases (creation and execution)
- `var` hoisting with `undefined` initialization
- `let` and `const` hoisting with TDZ
- Function declaration hoisting (fully hoisted)
- Function expression hoisting (NOT fully hoisted)
- Scope comparison table: `var` vs `let` vs `const`
- TDZ in loops

## How to Run
```bash
node 22_Literal.js
node 23_null_undefined.js
node 26_Literal_Number_all.js
node 28_Template_Literal.js
node Task13May.js
```
