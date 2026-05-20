// ============================================
// task18May.js
// Finding Maximum Number using Ternary Operator
// ============================================

console.log("=== Find Maximum Between Two Numbers (Ternary Operator) ===\n");

let num1 = 45;
let num2 = 78;

// Ternary operator: condition ? value_if_true : value_if_false
let maxOfTwo = num1 > num2 ? num1 : num2;

console.log("Number 1:", num1);
console.log("Number 2:", num2);
console.log("Maximum of two numbers is:", maxOfTwo);


// Example with user-like inputs (negative and equal)
let a = -10;
let b = -3;
let max2 = a > b ? a : b;
console.log("\nBetween", a, "and", b, "=> Maximum is:", max2);

let x = 100;
let y = 100;
let max3 = x > y ? x : y;
console.log("Between", x, "and", y, "=> Maximum is:", max3, "(both are equal)");


console.log("\n=== Find Maximum Between Three Numbers (Nested Ternary Operator) ===\n");

let p = 12;
let q = 56;
let r = 34;

// Nested ternary to compare three numbers
// Step 1: Find max between p and q
// Step 2: Compare that result with r
let maxOfThree = (p > q) 
                    ? ((p > r) ? p : r)   // if p > q, then compare p with r
                    : ((q > r) ? q : r);   // else compare q with r

console.log("Number 1:", p);
console.log("Number 2:", q);
console.log("Number 3:", r);
console.log("Maximum of three numbers is:", maxOfThree);


// Another example with different values
let m1 = 99;
let m2 = 150;
let m3 = 88;

let maxAgain = m1 > m2 
                ? (m1 > m3 ? m1 : m3) 
                : (m2 > m3 ? m2 : m3);

console.log("\nBetween", m1 + ",", m2 + ", and", m3, "=> Maximum is:", maxAgain);


// Example where first number is maximum
let n1 = 500;
let n2 = 200;
let n3 = 300;

let maxFirst = n1 > n2 
                ? (n1 > n3 ? n1 : n3) 
                : (n2 > n3 ? n2 : n3);

console.log("Between", n1 + ",", n2 + ", and", n3, "=> Maximum is:", maxFirst);


// Example where last number is maximum
let k1 = 10;
let k2 = 25;
let k3 = 99;

let maxLast = k1 > k2 
                ? (k1 > k3 ? k1 : k3) 
                : (k2 > k3 ? k2 : k3);

console.log("Between", k1 + ",", k2 + ", and", k3, "=> Maximum is:", maxLast);


console.log("\n=== All Equal Numbers ===");
let e1 = 7, e2 = 7, e3 = 7;
let maxEqual = e1 > e2 
                ? (e1 > e3 ? e1 : e3) 
                : (e2 > e3 ? e2 : e3);
console.log("Between", e1 + ",", e2 + ", and", e3, "=> Maximum is:", maxEqual);
