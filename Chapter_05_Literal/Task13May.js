// ============================================
// Task13May.js
// Hoisting and Temporal Dead Zone (TDZ) Explained Simply
// ============================================

/*
  ================================================================
  HOISTING: What is it?
  ================================================================

  JavaScript reads your code in TWO phases:
  1. CREATION PHASE: JavaScript scans your code and allocates memory 
     for all variables and functions. This is called "Hoisting".
  2. EXECUTION PHASE: JavaScript runs your code line by line.

  "Hoisting" means moving declarations to the top of their scope 
  (like moving them to the top of the file or function).

  BUT: Only the DECLARATION is hoisted, NOT the value assignment!
*/

// ============================================
// 1. VAR - Hoisted and Initialized with undefined
// ============================================

console.log("--- VAR Hoisting ---");

console.log(myVar); // undefined (not an error!)
var myVar = 10;
console.log(myVar); // 10

/*
  What JavaScript actually does behind the scenes:

  var myVar;          // Declaration is hoisted (value is undefined)
  console.log(myVar); // undefined
  myVar = 10;         // Assignment stays in place
  console.log(myVar); // 10

  So var is hoisted with a default value of 'undefined'.
  That's why you don't get an error.
*/


// ============================================
// 2. LET - Hoisted but NOT Initialized (TDZ exists)
// ============================================

console.log("\n--- LET Hoisting & TDZ ---");

// console.log(myLet); // ERROR! Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // 20

/*
  Let IS hoisted, but JavaScript puts it in a " Temporal Dead Zone" (TDZ).

  What is TDZ?
  - It's the time between when the variable is hoisted and when it is declared.
  - In this zone, you CANNOT access the variable at all.
  - JavaScript knows the variable exists, but won't let you use it.

  Behind the scenes:
  
  // TDZ starts here
  console.log(myLet); // ERROR! Variable is in TDZ
  let myLet = 20;     // TDZ ends here
  console.log(myLet); // 20

  Key Point: var gives you 'undefined'. let throws an error.
*/


// ============================================
// 3. CONST - Same as LET (Hoisted but in TDZ)
// ============================================

console.log("\n--- CONST Hoisting & TDZ ---");

// console.log(myConst); // ERROR! Cannot access 'myConst' before initialization
const myConst = 30;
console.log(myConst); // 30

// const myConst2;      // ERROR! const MUST be initialized when declared

/*
  const behaves exactly like let for hoisting and TDZ.

  Extra rule for const:
  - You MUST assign a value when you declare it.
  - You CANNOT reassign it later.

  Behind the scenes:

  // TDZ starts here
  console.log(myConst); // ERROR! Variable is in TDZ
  const myConst = 30;   // TDZ ends here
  console.log(myConst); // 30
*/


// ============================================
// 4. FUNCTION DECLARATION - Fully Hoisted!
// ============================================

console.log("\n--- Function Hoisting ---");

sayHello(); // Works! Outputs: Hello!

function sayHello() {
  console.log("Hello!");
}

/*
  Function declarations are FULLY hoisted.
  Both the name AND the body are moved to the top.
  That's why you can call a function BEFORE its declaration.
*/


// ============================================
// 5. FUNCTION EXPRESSION - NOT Fully Hoisted
// ============================================

console.log("\n--- Function Expression Hoisting ---");

// myFunc(); // ERROR! Cannot access 'myFunc' before initialization

var myFunc = function() {
  console.log("I am a function expression");
};

myFunc(); // Works here

/*
  Function expressions using var:
  - Only the variable name is hoisted (as undefined).
  - The function body stays where it is.
  - So calling it before declaration is like calling undefined().

  Function expressions using let/const:
  - They are in TDZ just like regular let/const variables.
*/


// ============================================
// 6. SCOPE COMPARISON: var vs let vs const
// ============================================

console.log("\n--- Scope Differences ---");

if (true) {
  var varInsideBlock = "I am var";
  let letInsideBlock = "I am let";
  const constInsideBlock = "I am const";
}

console.log(varInsideBlock);   // Works! var is function-scoped (or global)
// console.log(letInsideBlock); // ERROR! let is block-scoped
// console.log(constInsideBlock); // ERROR! const is block-scoped

/*
  SCOPE RULES:
  - var: Function-scoped or globally-scoped. Escapes blocks like if, for, while.
  - let: Block-scoped. Only lives inside { } where it was declared.
  - const: Block-scoped. Only lives inside { } where it was declared.
*/


// ============================================
// 7. TDZ IN LOOPS
// ============================================

console.log("\n--- TDZ in Loops ---");

for (let i = 0; i < 3; i++) {
  // Each iteration creates a NEW 'i' in a new block scope
  console.log("Loop iteration:", i);
}

// console.log(i); // ERROR! i is block-scoped inside the for loop

for (var j = 0; j < 3; j++) {
  console.log("Var loop iteration:", j);
}
console.log("After var loop, j is:", j); // Works! j is 3


// ============================================
// 8. TDZ WITHIN THE SAME BLOCK
// ============================================

console.log("\n--- TDZ Within Same Block ---");

{
  // TDZ starts here for 'value'
  // console.log(value); // ERROR! TDZ - Cannot access before initialization
  
  let value = 100; // TDZ ends here
  console.log(value); // 100
}


// ============================================
// SIMPLE SUMMARY TABLE
// ============================================

console.log("\n=== SUMMARY TABLE ===");
console.log("Keyword | Hoisted? | Initial Value | Can Reassign? | Scope");
console.log("--------|----------|---------------|---------------|--------");
console.log("var     | Yes      | undefined     | Yes           | Function/Global");
console.log("let     | Yes      | TDZ (no value)| Yes           | Block");
console.log("const   | Yes      | TDZ (no value)| No            | Block");
console.log("function| Yes      | Full body     | N/A           | Function/Global");

console.log("\n=== KEY TAKEAWAYS ===");
console.log("1. All declarations (var, let, const, function) are hoisted.");
console.log("2. var gets 'undefined' immediately.");
console.log("3. let and const are hoisted but put in TDZ until their declaration line.");
console.log("4. Accessing let/const in TDZ throws a ReferenceError.");
console.log("5. Always declare variables at the TOP of their scope.");
console.log("6. Prefer let and const over var to avoid hoisting surprises.");
