// ============================================
// 38_Confusing_comparison.js
// Demonstrating tricky and confusing cases with == vs ===
// ============================================

console.log("=== STRICT EQUALITY (===) - Checks value AND type ===\n");

console.log("1: 5 === '5'", 5 === "5");           // false (number vs string)
console.log("2: 0 === false", 0 === false);         // false (number vs boolean)
console.log("3: '' === 0", "" === 0);               // false (string vs number)
console.log("4: null === undefined", null === undefined); // false (different types)
console.log("5: NaN === NaN", NaN === NaN);         // false (NaN is never equal to itself)

console.log("\n=== LOOSE EQUALITY (==) - Type coercion happens ===\n");

// String vs Number
console.log("6: 5 == '5'", 5 == "5");               // true (string '5' coerced to number 5)
console.log("7: '' == 0", "" == 0);                 // true (empty string coerced to 0)
console.log("8: '0' == 0", "0" == 0);               // true (string '0' coerced to number 0)
console.log("9: '  ' == 0", "  " == 0);              // true (whitespace string coerced to 0)

// Boolean vs Number/String
console.log("10: 1 == true", 1 == true);             // true (true coerced to 1)
console.log("11: 0 == false", 0 == false);           // true (false coerced to 0)
console.log("12: 2 == true", 2 == true);             // false (true coerces to 1, 1 != 2)
console.log("13: '' == false", "" == false);         // true (both coerce to 0)
console.log("14: '0' == false", "0" == false);       // true (both eventually coerce to 0)

// null and undefined
console.log("15: null == undefined", null == undefined);   // true (special rule: they equal each other)
console.log("16: null == 0", null == 0);             // false (null does NOT coerce to 0 with ==)
console.log("17: undefined == 0", undefined == 0);   // false (undefined does NOT coerce to 0)
console.log("18: null == false", null == false);     // false
console.log("19: undefined == false", undefined == false); // false

// Arrays and Objects
console.log("20: [] == ''", [] == "");               // true (array coerced to empty string)
console.log("21: [] == 0", [] == 0);                 // true ([] -> '' -> 0)
console.log("22: [1] == '1'", [1] == "1");           // true (array coerced to '1')
console.log("23: [1,2] == '1,2'", [1, 2] == "1,2");  // true (toString joins with comma)
console.log("24: {} == '[object Object]'", {} == "[object Object]"); // true

// The famous mind-bender
console.log("25: [] == ![]", [] == ![]);             // true
// Explanation:
// ![] evaluates to false (array is truthy, negated becomes false)
// Then: [] == false  ->  [] == 0  ->  '' == 0  ->  0 == 0  -> true

// NaN behavior
console.log("26: NaN == NaN", NaN == NaN);           // false (NaN is never equal to anything, even itself)
console.log("27: NaN === NaN", NaN === NaN);         // false
console.log("28: isNaN('hello')", isNaN("hello"));   // true (coerces to number first)
console.log("29: Number.isNaN('hello')", Number.isNaN("hello")); // false (no coercion, string is not NaN)

// Zero and Negative Zero
console.log("30: 0 === -0", 0 === -0);               // true (strict equality sees them as equal)
console.log("31: Object.is(0, -0)", Object.is(0, -0)); // false (Object.is distinguishes them)
console.log("32: 1/0 === 1/-0", 1/0 === 1/-0);     // false (Infinity !== -Infinity)

// Special string cases
console.log("33: '\\t' == 0", "\t" == 0);            // true (tab is whitespace -> 0)
console.log("34: '\\n' == 0", "\n" == 0);            // true (newline is whitespace -> 0)
console.log("35: '  5  ' == 5", "  5  " == 5);      // true (string trimmed and coerced)

// Comparing objects (reference equality)
const a = { x: 1 };
const b = { x: 1 };
const c = a;
console.log("36: {x:1} == {x:1}", a == b);         // false (different references)
console.log("37: {x:1} === {x:1}", a === b);       // false (different references)
console.log("38: a === c (same ref)", a === c);    // true (same reference)

// ============================================
// Summary Rules for Loose Equality (==)
// ============================================
console.log("\n=== SUMMARY OF CONFUSING RULES ===");
console.log("- If types match, behave like ===");
console.log("- null == undefined ONLY (no other values)");
console.log("- String + Number: string converts to number");
console.log("- Boolean + Anything: boolean converts to number (true=1, false=0)");
console.log("- Object + Primitive: object calls toString() or valueOf() first");
console.log("- NaN != everything (including itself)");
console.log("\n>>> BEST PRACTICE: Always use === unless you explicitly need coercion <<<")
