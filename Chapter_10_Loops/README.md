# Chapter 10: Loops

This folder covers all loop constructs in JavaScript, essential for repeating actions, iterating over data, and building automation logic.

## Files

### 71_For_loop.js
Shows the **problem of manual repetition** by printing numbers 1 through 10 with individual `console.log` statements. This sets up the motivation for why loops are needed in programming.

### 72_For_loop.js
Introduces the **basic `for` loop syntax**:
- Initialization: `let i = 0`
- Condition: `i <= 5`
- Increment: `i++`
- Prints numbers 0 through 5 automatically

### 73_For_loop2.js
Demonstrates **loop variable naming flexibility**:
- Shows that loop variables don't have to be named `i`
- Uses `_1` as a valid loop variable name
- Prints numbers 0 through 10

### 74_IQ.js
Combines `for` loops with `if-else` conditions:
- Conditional logic inside a loop body
- A loop that runs only once (`i < 1`) as a sanity check
- Demonstrates loop + condition integration

### 75_For_Of_IN_EACH.js
Introduces the **`while` loop**:
- Initialization, condition (`attempt < 3`), and update (`attempt++`)
- Prints 0, 1, 2
- Comment notes that `for...of` will be covered with arrays

### 76_While.js
Two practical examples of `while` loops:
- Standard counter pattern (0 to 2)
- Contextual example printing a message 15 times
- Demonstrates loops work with any repetitive output

### 77_Do_While.js
Introduces the **`do...while` loop**:
- Condition (`a < 10`) is false from the start (`a = 10`)
- But the code block executes **before** the condition is checked
- Prints `10` once, perfectly demonstrating the "execute at least once" guarantee

### 78_Do_While.js
A practical **`do...while` retry example**:
- Simulates a retry mechanism in automation
- Performs an action and checks if it should repeat
- Executes exactly 3 times (retry = 0, 1, 2)

### 79_IQ.js
A reverse/decrementing `while` loop:
- Counts down from 5 to 1 using `i--`
- Shows that loops can decrement as well as increment

### 80_IQ.js
Demonstrates `do...while` with a condition that becomes immediately false:
- `i` starts at 0, the condition `i > 0` is false
- But because it's a `do...while`, the body executes once
- Prints `0` and decrements to `-1` before exiting

### 81_IQ.js
Identical to `80_IQ.js` - reinforces the `do...while` "execute at least once" concept.

## Loop Types Summary
| Loop Type | Use Case | Checks Condition |
|-----------|----------|-----------------|
| `for` | Known number of iterations | Before each iteration |
| `while` | Unknown iterations, condition-based | Before each iteration |
| `do...while` | Must execute at least once | After each iteration |

## How to Run
```bash
node 71_For_loop.js
node 72_For_loop.js
node 76_While.js
node 77_Do_While.js
node 78_Do_While.js
```
