# Chapter 11: Arrays

This folder covers JavaScript arrays, a fundamental data structure for storing ordered collections of data. Arrays are essential for managing test data, iterating over elements, and transforming collections in Playwright automation.

## Files

### 83_Arrays.js
Introduction to array basics:
- Creating an empty array `[]`
- Initializing arrays with values (strings, numbers)
- Accessing elements by index
- Accessing an out-of-bounds index returns `undefined`
- Mixed-type arrays (numbers, strings, booleans, `null`)

### 84_Arrays.js
Different ways to create arrays:
- Array literal notation
- `new Array(length)` — creates an array with empty items
- `new Array(element1, element2, ...)` — creates an array with given elements
- `Array.of()` — creates an array from arguments
- `Array.from()` — creates an array from an iterable (e.g., a string)

### 85_Access_Array.js
Accessing and modifying array elements:
- Index-based access (`arr[0]`)
- Negative index access using `.at(-1)`, `.at(-2)`, etc.
- Modifying elements by index assignment

### 86_Arrays_Adding_Remove.js
Core array methods for adding and removing elements:
- `push()` — add to the end
- `pop()` — remove from the end
- `unshift()` — add to the beginning
- `shift()` — remove from the beginning
- Adding multiple elements with `push()` and `unshift()`

### 87_Adding_Remove2.js
Advanced array manipulation with `splice()`:
- Removing elements (`splice(start, deleteCount)`)
- Inserting elements (`splice(start, 0, newElement)`)
- Replacing elements (`splice(start, deleteCount, newElement)`)
- Removing and inserting multiple elements at once

### 88_Real_Example.js
A practical example using arrays:
- Storing a list of browser names
- Using `.length` to get the array size
- Removing browsers with `pop()` and `shift()`
- Iterating with a `for` loop and checking conditions inside the loop

### 89_Searching.js
Searching within arrays:
- `indexOf()` — find the first index of a value
- `lastIndexOf()` — find the last index of a value
- `includes()` — check if a value exists
- `find()` — get the first element matching a condition
- `findIndex()` — get the index of the first matching element
- `findLast()` — get the last matching element
- `findLastIndex()` — get the index of the last matching element

### 90_Iterate.js
Iterating over arrays:
- Traditional `for` loop with index
- `for...of` loop for values
- `forEach()` for index and value
- `for...in` loop for indices
- `entries()` with `for...of` for both index and value

### 91_Transform_Array.js
Transforming arrays with functional methods:
- `map()` — transform every element into a new array
- `filter()` — keep elements that pass a test
- `reduce()` — accumulate values into a single result
- `flat()` — flatten nested arrays

## Array Methods Summary

| Method | Purpose | Mutates Original |
|--------|---------|------------------|
| `push()` | Add to end | Yes |
| `pop()` | Remove from end | Yes |
| `unshift()` | Add to beginning | Yes |
| `shift()` | Remove from beginning | Yes |
| `splice()` | Add/Remove/Replace at index | Yes |
| `indexOf()` | Find first index of value | No |
| `includes()` | Check existence | No |
| `find()` | Find first matching element | No |
| `map()` | Transform all elements | No |
| `filter()` | Select matching elements | No |
| `reduce()` | Accumulate to single value | No |
| `flat()` | Flatten nested arrays | No |

## How to Run

```bash
node 83_Arrays.js
node 84_Arrays.js
node 85_Access_Array.js
node 86_Arrays_Adding_Remove.js
node 87_Adding_Remove2.js
node 88_Real_Example.js
node 89_Searching.js
node 90_Iterate.js
node 91_Transform_Array.js
```
