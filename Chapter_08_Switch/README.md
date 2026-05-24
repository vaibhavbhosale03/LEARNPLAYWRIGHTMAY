# Chapter 08: Switch

This chapter covers the `switch` statement as an alternative to multiple `if-else` conditions, useful for handling multiple discrete values in test scenarios.

## Files

### 59_Switch.js
Demonstrates the basic syntax of a `switch` statement:
- Maps numeric day values (1-7) to weekday names
- Shows that multiple statements can exist inside a `case` block before the `break`
- Each case ends with `break` to prevent fall-through

### 60_No_Break.js
Intentionally missing `break` statements to demonstrate **fall-through** behavior:
- Once a matching case is found (case 2), execution continues through all subsequent cases
- Prints every line from the matching case through the default case
- Important lesson: always use `break` unless fall-through is intentional

### 61_Default.js
Shows how the `default` case works:
- `day = 10` does not match any defined case (0-6)
- The `default` block executes and prints "Invalid day value"
- All other cases properly include `break`

### 62_Real_time_example.js
A practical real-world example using `switch` for **HTTP API response code validation**:
- Handles status codes 200 (OK), 404 (Not Found)
- Demonstrates how `switch` cleanly handles multiple discrete status codes
- Perfect for automation/API testing scenarios

### 63_Switch_Group.js
Demonstrates **grouped cases** (intentional fall-through):
- Multiple browser names (Chrome, Edge, Brave, Opera) grouped under one logic path
- Firefox gets its own path
- Safari gets its own path
- Shows how to categorize multiple values under one code block

### 64_IQ.js
An **interview question** demonstrating fall-through behavior:
- `fruit = "banana"` with no `break` statements
- Execution prints "Banana selected", then falls through to "Cherry selected", "Date selected", and "Default reached"
- Tests understanding of `break` necessity

### 65_IQ2.js
An advanced pattern: `switch(true)` with **boolean expressions in cases**:
- Creates range-based logic similar to `if-else if` chains
- Example: score ranges (95+, 85+, 70+, etc.)
- Creative use of `switch` for checking numeric ranges

### 66_IQ3.js
An **IQ about duplicate case values**:
- JavaScript allows duplicate `case` labels syntactically
- Only the **first matching case** executes
- The second `case 10` is unreachable code

### 67_IQ4.js
An **IQ about strict equality (`===`) in switch**:
- `switch` uses strict comparison (`===`)
- `0 === false` is `false` even though `0 == false` is `true`
- Demonstrates why `status = 0` matches `case 0:` but not `case false:`

## Key Concepts
- `switch` evaluates an expression and matches it against `case` values
- `break` exits the switch block; without it, execution falls through
- `default` handles unmatched cases
- `switch` uses strict equality (`===`) for comparisons
- Grouped cases allow multiple values to share the same logic

## How to Run
```bash
node 59_Switch.js
node 60_No_Break.js
node 61_Default.js
node 62_Real_time_example.js
node 63_Switch_Group.js
```
