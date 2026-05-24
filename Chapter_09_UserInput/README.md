# Chapter 09: User Input

This folder introduces handling user input in Node.js, which is essential for creating interactive scripts and test automation tools.

## Files

### 68_User_Inpur.js
*(Note: filename has a typo "Inpur" instead of "Input")*

Introduces **user input handling in Node.js** using the built-in `readline` module:
- Creates a readline interface with `process.stdin` and `process.stdout`
- Prompts the user to "Enter a number"
- Converts the input string to a number using `Number()`
- Checks if the number is even or odd using the modulus operator
- Closes the readline interface after processing

### 69_Node_readline.js
Reinforces the `readline` approach for reading user input in Node.js:
- Identical logic to `68_User_Inpur.js`
- Same even/odd checker using standard Node.js readline
- Demonstrates callback-based asynchronous input handling

### 70_prompt_sync.js
Demonstrates a **simpler synchronous input method** using the `prompt-sync` npm package:
- Much more concise than `readline`
- No callbacks or manual interface closure needed
- Requires `npm install prompt-sync`
- Same even/odd logic applied with cleaner syntax

## Key Differences
| Approach | Code Complexity | Async/Sync | Requires npm install |
|----------|----------------|------------|---------------------|
| `readline` | More verbose | Async (callback) | No |
| `prompt-sync` | Very concise | Sync | Yes |

## How to Run
```bash
# For readline-based files
node 68_User_Inpur.js
node 69_Node_readline.js

# For prompt-sync (install dependency first)
npm install prompt-sync
node 70_prompt_sync.js
```

## Note
When running these files, the program will wait for you to type a number and press Enter.
