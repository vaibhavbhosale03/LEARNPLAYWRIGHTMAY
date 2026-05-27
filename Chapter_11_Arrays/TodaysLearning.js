// ============================================================
//  TodaysLearning.js
//  Topic: splice vs slice | flat vs concat
// ============================================================

console.log("=== 1. SPLICE vs SLICE ===\n");

/*
  SPLICE  ->  Mutates the original array (surgery / scissors)
  SLICE   ->  Does NOT mutate the original array (copy / pizza slice)
*/

// ---------------------------
// SPLICE (start, deleteCount, ...items)
// ---------------------------
let fruits = ["apple", "banana", "cherry", "date"];
console.log("Original fruits:", fruits); // [ 'apple', 'banana', 'cherry', 'date' ]

// Remove 1 item at index 1
let removed = fruits.splice(1, 1);
console.log("After splice(1, 1):", fruits);   // [ 'apple', 'cherry', 'date' ]
console.log("Removed items:", removed);       // [ 'banana' ]

// Replace item at index 1
fruits.splice(1, 1, "blueberry");
console.log("After splice(1, 1, 'blueberry'):", fruits); // [ 'apple', 'blueberry', 'date' ]

// Insert without deleting
fruits.splice(1, 0, "avocado");
console.log("After splice(1, 0, 'avocado'):", fruits);   // [ 'apple', 'avocado', 'blueberry', 'date' ]

// ---------------------------
// SLICE (start, end)  -- end is EXCLUSIVE
// ---------------------------
let numbers = [10, 20, 30, 40, 50];
console.log("\nOriginal numbers:", numbers); // [ 10, 20, 30, 40, 50 ]

let sliced = numbers.slice(1, 3);
console.log("After slice(1, 3):", sliced);   // [ 20, 30 ]
console.log("Original after slice:", numbers); // [ 10, 20, 30, 40, 50 ]  <-- UNCHANGED

// Negative indices count from end
let lastTwo = numbers.slice(-2);
console.log("slice(-2):", lastTwo); // [ 40, 50 ]


console.log("\n\n=== 2. FLAT vs CONCAT ===\n");

/*
  FLAT   ->  Reduces nesting depth inside ONE array
  CONCAT ->  Joins MULTIPLE arrays / values together
*/

// ---------------------------
// FLAT (depth)
// ---------------------------
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("Nested array:", nested); // [ 1, [2, 3], [4, [5, 6]] ]

console.log("flat(1):", nested.flat(1));       // [ 1, 2, 3, 4, [5, 6] ]
console.log("flat(2):", nested.flat(2));       // [ 1, 2, 3, 4, 5, 6 ]
console.log("flat(Infinity):", nested.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ]

// ---------------------------
// CONCAT (...arrays / values)
// ---------------------------
let arrA = [1, 2];
let arrB = [3, 4];
let arrC = [[5, 6]];

let combined = arrA.concat(arrB);
console.log("\narrA.concat(arrB):", combined); // [ 1, 2, 3, 4 ]

let multiple = arrA.concat(arrB, arrC, 7, 8);
console.log("concat(arrB, arrC, 7, 8):", multiple); // [ 1, 2, 3, 4, [5, 6], 7, 8 ]
// Notice: concat does NOT flatten nested arrays, it appends them as-is

// If you need flattening after concat, chain flat()
let flattened = arrA.concat(arrC).flat();
console.log("concat then flat:", flattened); // [ 1, 2, 5, 6 ]


// ============================================================
//  QUICK REFERENCE SUMMARY (shown in console)
// ============================================================
console.log("\n\n=== QUICK SUMMARY ===");
console.log(`
+-----------+-------------------+-------------------+
| Feature   | splice()          | slice()           |
+-----------+-------------------+-------------------+
| Mutates   | YES               | NO                |
| Returns   | Removed items     | New copied array  |
| Insert?   | YES               | NO                |
| Delete?   | YES               | NO                |
+-----------+-------------------+-------------------+

+-----------+-------------------+-------------------+
| Feature   | flat()            | concat()          |
+-----------+-------------------+-------------------+
| Input     | 1 array (nested)  | Multiple arrays   |
| Mutates   | NO                | NO                |
| Flattens? | YES               | NO                |
| Joins?    | NO                | YES               |
+-----------+-------------------+-------------------+
`);
