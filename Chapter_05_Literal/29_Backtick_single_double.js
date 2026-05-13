// ==========================================
// Single Quotes vs Double Quotes vs Backticks
// ==========================================

let name = "Alice";
let age = 25;


// ==========================================
// 1. SINGLE QUOTES ('')
// ==========================================

let singleQuote = 'Hello, World!';
let singleWithApostrophe = 'It\'s a nice day';   // must escape single quotes inside
let singleWithDouble = 'He said "Hello"';        // double quotes inside are fine

console.log("1. Single quote string:", singleQuote);
console.log("2. Single quote with escape:", singleWithApostrophe);
console.log("3. Single quote with double quotes inside:", singleWithDouble);


// ==========================================
// 2. DOUBLE QUOTES ("")
// ==========================================

let doubleQuote = "Hello, World!";
let doubleWithQuote = "She said \"Yes!\"";       // must escape double quotes inside
let doubleWithSingle = "It's a nice day";        // single quotes inside are fine

console.log("4. Double quote string:", doubleQuote);
console.log("5. Double quote with escape:", doubleWithQuote);
console.log("6. Double quote with single quotes inside:", doubleWithSingle);


// ==========================================
// 3. KEY POINT: SINGLE AND DOUBLE ARE THE SAME
//    They are interchangeable. Pick one style and be consistent.
// ==========================================

let a = 'hello';
let b = "hello";
console.log("7. Single vs Double equal?", a === b); // true


// ==========================================
// 4. BACKTICKS / TEMPLATE LITERALS (``)
// ==========================================

// 4a. STRING INTERPOLATION - embed variables/expressions directly
let greeting = `Hello, ${name}! You are ${age} years old.`;
console.log("8. Interpolation:", greeting);

let calc = `5 + 3 = ${5 + 3}`;
console.log("9. Expression inside backtick:", calc);

// 4b. MULTI-LINE STRINGS
let multiLine = `This is line 1
This is line 2
This is line 3`;
console.log("10. Multi-line string:");
console.log(multiLine);

// 4c. NO NEED TO ESCAPE SINGLE OR DOUBLE QUOTES
let easyQuotes = `It's a "beautiful" day!`;
console.log("11. No escaping needed:", easyQuotes);


// ==========================================
// 5. COMPARISON SUMMARY
// ==========================================

console.log("\n--- Summary ---");
console.log("Single/Double Quotes:");
console.log("  - Good for simple strings");
console.log("  - Cannot span multiple lines");
console.log("  - Need escaping for same-type quotes inside");
console.log("  - Cannot embed variables/expressions");

console.log("\nBackticks (Template Literals):");
console.log("  - Allow variable interpolation: ${variable}");
console.log("  - Allow multi-line strings");
console.log("  - No need to escape quotes");
console.log("  - Slightly slower performance for very simple strings");


// ==========================================
// 6. QUICK REFERENCE EXAMPLES
// ==========================================

// Use single/double quotes for simple, static text
let title = 'JavaScript Basics';

// Use backticks when you need to insert variables
let message = `Welcome, ${name}!`;

// Use backticks for multi-line HTML templates
let html = `
  <div class="card">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
  </div>
`;
console.log("12. HTML template with backticks:");
console.log(html);


// ==========================================
// 7. COMMON MISTAKE
// ==========================================

// This does NOT work with single/double quotes!
// let wrong = 'Hello, ${name}';  // Output: Hello, ${name} (literal text)

let wrong = 'Hello, ${name}';
console.log("13. Single quotes with ${}:", wrong);  // Hello, ${name}

let correct = `Hello, ${name}`;
console.log("14. Backticks with ${}:", correct);    // Hello, Alice
