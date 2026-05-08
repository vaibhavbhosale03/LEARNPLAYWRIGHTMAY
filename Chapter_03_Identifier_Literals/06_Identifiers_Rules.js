var $ = 10;
var _a = 11;

var p = 10;

var abc123 = 34;

var Name = "Vaibhav";
var name = "Bhosale";

var v_b = "hello";
var v$b = "hello";

// Rule 1: Can only contain letters, digits, underscore (_), and dollar sign ($)
let userName1    = "John";    // letters
let _count      = 0;         // underscore
let $price      = 9.99;      // dollar sign
let user_name   = "Jane";    // underscore in middle
let price$      = 10;        // dollar at end
let user2       = "Bob";     // digit in middle

// Rule 2: Must start with a letter, underscore (_), or dollar sign ($) NOT a digit
let validName   = "Valid";   // starts with letter
let _private    = true;      // starts with underscore
let $jQuery     = {};        // starts with dollar sign
let _123        = 123;       // starts with underscore, digits after
// INVALID: Cannot start with a digit
// let 2ndPlace = "silver";  // SyntaxError
// let 9lives   = 9;         // SyntaxError

// Rule 3: Cannot be a JavaScript reserved keyword
// INVALID: These will throw SyntaxError
// let class = "Math";       // Reserved
// let return = 5;           // Reserved
// let function = () => {};  // Reserved
// let var = 10;             // Reserved
// VALID: Alternative names
let className   = "Math";
let myReturn    = 5;
let myFunction  = () => {};
let variable    = 10;

// Rule 4: JavaScript is case sensitive
let firstName   = "Alice";
let FirstName   = "Bob";
let FIRSTNAME   = "Charlie";
console.log(firstName); // "Alice"
console.log(FirstName); // "Bob"
console.log(FIRSTNAME); // "Charlie"
// These are THREE completely different identifiers

// Rule 5: Unicode characters are allowed (letters from any language)
let 用户名      = "Alice";     // Chinese characters
let नाम         = "Ram";       // Hindi characters
let имя         = "Ivan";      // Cyrillic characters
let ελληνικά    = "Greek";     // Greek characters
let nombreé     = "José";      // Accented characters

// Rule 6: No spaces or special symbols allowed
// INVALID
// let user name = "John";   // Space not allowed
// let user-name = "John";   // Hyphen not allowed (treated as subtraction)
// let user@name = "John";   // @ not allowed
// let user#name = "John";   // # not allowed
// VALID: Use camelCase or underscores instead
let myUserName  = "John";    // camelCase (recommended)
let my_user_name = "John";    // snake_case

// Rule 7: No length limit, but keep them meaningful and concise
// Technically valid, but bad practice:
let thisIsAVeryVeryVeryLongVariableNameThatGoesOnForever = 1;
// Better:
let totalPrice = 1;
