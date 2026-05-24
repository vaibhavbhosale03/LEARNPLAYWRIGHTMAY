# Chapter 06: Operators

Comprehensive coverage of JavaScript operators essential for writing logical automation scripts.

## Files

### 30_Operator.js
Introduction to assignment operators. Demonstrates basic variable assignment and reassignment.

### 31_Arithmetic_OP.js
Arithmetic operators in action:
- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)

### 32_Modulus_OP.js
Deep dive into the modulus (remainder) operator `%`:
- `13 % 7` returns the remainder
- Practical use: checking even/odd numbers (`n % 2 === 0` for even, `n % 2 === 1` for odd)

### 33_Expo_op.js
Exponentiation operator (`**`):
- `2 ** 3` equals `8` (2 to the power of 3)
- Variable-based exponentiation

### 34_IQ.js
Compound (shorthand) assignment operators:
- `+=` (add and assign)
- `-=` (subtract and assign)
- `*=` (multiply and assign)
- `/=` (divide and assign)
- `%=` (modulus and assign)

### 35_Comparison_OP.js
Comparison operators overview:
- `>`, `<`, `>=`, `<=`
- Loose equality (`==`) vs strict equality (`===`)
- Assignment (`=`) vs comparison distinction

### 36_Comparison_Strict_loose.js
Demonstrates the critical difference between `==` and `===`:
- `42 == "42"` is `true` (loose comparison with type coercion)
- `5 === "5"` is `false` (strict comparison checks type too)
- `0 == ""` is `true` but `0 === ""` is `false`
- `true == 1` is `true` (boolean coerced to number)

### 38_Confusing_comparison.js
Tricky and confusing cases with `==` vs `===`:
- Strict equality pitfalls: `NaN === NaN` is `false`
- Loose equality coercion: empty arrays, objects, strings
- The famous `[] == ![]` evaluates to `true`
- `null` and `undefined` behavior with `==`
- `Object.is()` vs `===`
- Best practice: always use `===` unless you explicitly need coercion

### 39_Logical_OP.js
Logical operators:
- `&&` (AND) - both conditions must be true
- `||` (OR) - at least one condition must be true
- `!` (NOT) - negates the boolean value

### 40_String_Con_Op.js
String concatenation using `+=` operator.

### 41_Ternary_Op.js
Ternary (conditional) operator for concise if-else logic:
- Basic syntax: `condition ? trueValue : falseValue`
- Real-world examples: test result PASS/FAIL, browser headless/headed mode, SLA checking
- Nested ternary operators for multiple conditions
- HTTP status code categorization
- Temperature classification

### 42_Type_Op.js
Type-checking with `typeof` operator on various data types.

### 43_Incre_Decre_Ops.js
Pre-increment operator (`++a`):
- Increases the value first, then assigns
- `++a` increments `a` by 1 before returning

### 44_Null_Ops.js
Nullish coalescing operator (`??`):
- `amul ?? "nandani milk"` returns the right-hand value if left is `null` or `undefined`
- Also shows confusing `null >= 0` and `null === 0` behavior

### 45_Post_Increment.js
Post-increment operator (`a++`):
- Assigns the current value first, then increments
- Demonstrates the difference between `a++` and `++a`

### 46_IQ_increment_d.js
Interview question on post-increment:
- `let result = a++` assigns the original value to `result`, then increments `a`

### 47_Advance_ID.js
Advanced increment/decrement combinations:
- `++a + a` - pre-increment then addition
- `c++ + ++c` - post-increment and pre-increment in same expression
- Multiple pre-increments in one expression

### task18May.js
Practice task: Finding maximum number using ternary operator:
- Maximum between two numbers
- Maximum between three numbers (nested ternary)
- Edge cases: negative numbers, equal numbers

## How to Run
```bash
node 30_Operator.js
node 31_Arithmetic_OP.js
node 41_Ternary_Op.js
node 47_Advance_ID.js
node task18May.js
```
