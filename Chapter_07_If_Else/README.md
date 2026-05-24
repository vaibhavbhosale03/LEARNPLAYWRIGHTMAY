# Chapter 07: If-Else

Mastering conditional logic for decision-making in test automation scenarios.

## Files

### 48_IF_Else.js
Introduction to `if-else` conditional statements:
- Checks if `age > 18` to determine voting eligibility
- Basic two-way decision making

### 49_if_elseif_else.js
Chained `if-else if-else` conditions for grade calculation:
- Score-based grading system (A, B, C, D, Fail)
- Multiple conditions checked in sequence
- Note: one condition (`score >= 60 && score <= 50`) has a logical error as a learning point

### 50_Real_IF_ELSE.js
Real-world role-based access control example:
- Nested `if-else` for login and role checking
- Checks `isLoggedIn` first, then `userRole` (admin, editor, viewer)
- Demonstrates practical use in web application testing

### 51_API_IF_ELSE.js
Using conditionals to validate API responses:
- Checks HTTP `statusCode` (200, 404)
- Prints appropriate messages based on API status
- Foundation for API test automation logic

### 52_IQ_IF_ELSE.js
Tricky questions and edge cases with conditionals:
- Truthy and falsy values in JavaScript
- Strings, numbers, objects, arrays as conditions
- Falsy values: `0`, `""`, `null`, `undefined`, `NaN`
- Truthy values: non-empty strings, non-zero numbers, objects, arrays
- Empty statement after `if` condition pitfall

### 53_IF_ELSE_real.js
Login validation with multiple conditions:
- Username and password checking with `&&`
- Account lock status with `!` (NOT operator)
- Real-world authentication flow simulation

### 54_IQ.js
Simple conditional check: `if (x > 5)` demonstrating basic comparison.

### 55_IE.js
Demonstrates that a single `if` without `else` is perfectly valid.

### 56_IQ_Even_Odd.js
Even or odd number check using modulus operator inside if-else.

### 57_Grade_calc.js
Grade calculation system:
- Marks >= 90 -> Grade A
- Marks >= 80 -> Grade B
- Marks >= 70 -> Grade C
- Marks >= 60 -> Grade D
- Else -> Fail

### 58_Leap_Year.js
Leap year determination with proper rules:
- Divisible by 4 AND not divisible by 100 -> Leap year
- OR divisible by 400 -> Leap year
- Else -> Not a leap year

### task20May.js
Combined practice task with three programs:
1. Even or Odd checker
2. Score card grade calculator
3. Leap year checker

## How to Run
```bash
node 48_IF_Else.js
node 50_Real_IF_ELSE.js
node 51_API_IF_ELSE.js
node 57_Grade_calc.js
node 58_Leap_Year.js
node task20May.js
```
