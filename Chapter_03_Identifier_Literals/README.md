# Chapter 03: Identifiers and Literals

This folder covers how to properly name variables (identifiers) and the different commenting styles used in JavaScript.

## Files

### 06_Identifiers_Rules.js
A comprehensive guide to JavaScript identifier naming rules with practical examples:
1. **Allowed characters**: letters, digits, underscore `_`, and dollar sign `$`
2. **Starting character**: must start with a letter, `_`, or `$` (NOT a digit)
3. **Reserved keywords**: cannot use JavaScript reserved words as variable names
4. **Case sensitivity**: `name`, `Name`, and `NAME` are three different variables
5. **Unicode support**: non-English characters are allowed
6. **No spaces or special symbols**: except `_` and `$`
7. **Length**: no strict limit, but keep names meaningful and concise

### 07_Identifiers_Part2.js
Explores various casing conventions (naming styles) used in programming:
- **camelCase** - `userName`, `getUserName` (most common in JS)
- **PascalCase** - `UserProfile` (used for classes)
- **snake_case** - `user_name` (common in Python)
- **SCREAMING_SNAKE_CASE** - `MAX_COUNT` (used for constants)
- **flatcase** - `username`
- **UPPERCASEFLATCASE** - `USERNAME`
- **Hungarian Notation** - `strName`, `nCount` (type prefix)
- **kebab-case / Train-Case / dot.case** - noted as invalid in JS but used in CSS/config

### 08_Comments.js
An exhaustive demonstration of all comment styles in JavaScript:
- **Single-line comments** (`//`)
- **Multi-line block comments** (`/* */`)
- **JSDoc comments** (`/** */`) with tags like `@param`, `@returns`, `@deprecated`
- **Inline/end-of-line comments**
- File header patterns and tricky edge cases

## How to Run
```bash
node 06_Identifiers_Rules.js
node 07_Identifiers_Part2.js
node 08_Comments.js
```
