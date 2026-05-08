// Chapter 3: Identifiers and Literals - Part 2
// This file demonstrates various casing styles used in JavaScript and programming in general.

// Note: JavaScript identifiers can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($).
// Identifiers cannot start with a digit.
// Some casing styles below are valid in JS, while others are shown for awareness but are invalid as JS variable names.

// 1. camelCase
// First word lowercase, subsequent words capitalized. Most common for variables and functions in JS.
let userName = "Alice";
let getUserName = () => userName;
let totalPriceAmount = 100;

// 2. PascalCase (UpperCamelCase)
// Every word starts with a capital letter. Common for classes, constructors, and React components.
class UserProfile {
    constructor(name) {
        this.name = name;
    }
}
let CustomerOrder = new UserProfile("Bob");

// 3. snake_case
// All lowercase with underscores between words. Valid in JS but less common than camelCase.
let user_name = "Charlie";
let get_user_name = () => user_name;
let total_price_amount = 200;

// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE / CONSTANT_CASE)
// All uppercase with underscores. Typically used for constants and environment variables.
const MAX_COUNT = 100;
const API_KEY = "abc-123";
const TOTAL_PRICE_AMOUNT = 300;

// 5. flatcase (lowercase)
// All lowercase, no separators. Valid but can reduce readability with multiple words.
let username = "Dave";
let totalpriceamount = 400; // Harder to read

// 6. UPPERCASEFLATCASE (UPPERCASE)
// All uppercase, no separators. Valid but rarely used for multi-word identifiers due to poor readability.
let USERNAME = "Eve";
let TOTALPRICEAMOUNT = 500;

// 7. Hungarian Notation
// Prefix indicates type or purpose. Was popular in early JS but largely obsolete today.
let strName = "Frank";   // str = string
let nCount = 10;         // n = number
let bIsActive = true;    // b = boolean
let arrItems = [];       // arr = array
let objConfig = {};      // obj = object

// 8. camelCase with acronyms (be careful!)
// Common debate: should acronyms be all caps or camel-cased? JS conventions vary.
let userID = 101;        // Some write userId
let parseHTML = () => { }; // Some write parseHtml
let xmlHTTPRequest = {};  // Some write xmlHttpRequest

// ---------------------------------------------------------------------------
// IMPORTANT: The following casings are NOT valid for JavaScript identifiers,
// but are commonly used in related technologies. They are shown for awareness.
// ---------------------------------------------------------------------------

// 9. kebab-case (dash-case, hyphen-case)
// Uses hyphens. INVALID as JS variable names because '-' is the subtraction operator.
// Commonly used in: CSS class names, HTML attributes, file names, JSON keys (as strings), URL slugs.
// Examples of where you see it (but NOT as JS identifiers):
// CSS: .my-class-name { }
// HTML: <div data-user-id="123"></div>
// File: my-script-file.js
// JSON: { "user-name": "Alice" }

// 10. Train-Case (HTTP-Header-Case)
// Capitalized words separated by hyphens. INVALID as JS identifiers.
// Commonly used in HTTP headers.
// Examples: Content-Type, X-Requested-With, Accept-Encoding

// 11. dot.case
// Uses periods. INVALID as JS identifiers because '.' is the property access operator.
// Commonly used in configuration keys or package names.
// Examples: "some.config.key", "com.company.project"

// ---------------------------------------------------------------------------
// Best Practice Recommendations for JavaScript:
// ---------------------------------------------------------------------------
// - Variables and functions: camelCase (e.g., getUserName, totalCount)
// - Classes and constructors: PascalCase (e.g., UserProfile, DataService)
// - Constants: SCREAMING_SNAKE_CASE (e.g., MAX_RETRY_COUNT, BASE_API_URL)
// - Private fields (modern JS): camelCase with # prefix (e.g., #privateField)
// - Avoid starting names with $ or _ unless following a specific convention (e.g., jQuery objects with $, private by convention with _)
