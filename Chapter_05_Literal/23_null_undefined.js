// ==========================================
// null vs undefined in JavaScript
// ==========================================

// 1. UNDEFINED
//    - A variable is declared but not assigned a value
//    - Automatically set by JavaScript
//    - Means "value is not assigned"

let userName;
console.log("1. Uninitialized variable:", userName); // undefined

function doNothing() {
  // no return statement
}
console.log("2. Function with no return:", doNothing()); // undefined

let person = { name: "Alice", age: 25 };
console.log("3. Missing property:", person.address); // undefined

let arr = [1, 2, 3];
console.log("4. Out of bounds index:", arr[10]); // undefined


// 2. NULL
//    - Represents intentional absence of any object value
//    - Must be explicitly assigned by programmer
//    - Means "no value" or "empty"

let emptyBox = null;
console.log("5. Explicitly null:", emptyBox); // null

let user = { name: "John", email: "john@example.com" };
user.email = null; // explicitly clearing the email
console.log("6. Cleared property:", user.email); // null
console.log("7. User object:", user);


// 3. TYPE CHECKING (Important Difference!)

console.log("8. typeof undefined:", typeof undefined); // "undefined"
console.log("9. typeof null:", typeof null);           // "object" (known JS bug!)


// 4. COMPARISON

console.log("10. null == undefined:", null == undefined);   // true  (loose equality)
console.log("11. null === undefined:", null === undefined); // false (strict equality)


// 5. PRACTICAL EXAMPLES

// Example A: API Response
let apiResponse = {
  data: null,           // we know data exists as a concept, but it's empty now
  error: undefined      // no error occurred, so error is not set
};
console.log("12. API response:", apiResponse);

// Example B: Form Fields
let formData = {
  name: "Alice",
  phone: null,          // user chose not to provide phone
  address: undefined    // address field wasn't even in the form
};
console.log("13. Form data:", formData);

// Example C: Cleanup
let timer = setTimeout(() => { }, 1000);
timer = null; // explicitly releasing reference
console.log("14. After cleanup:", timer);


// 6. COMMON PITFALL

let value = null;
if (value) {
  console.log("Truthy");
} else {
  console.log("15. null is falsy"); // This will run
}

let notSet;
if (notSet) {
  console.log("Truthy");
} else {
  console.log("16. undefined is also falsy"); // This will run
}


// 7. BEST PRACTICES

// Use undefined for: system-level, uninitialized, missing
// Use null for: programmer-intentional empty, cleared references

// Good: Check for both
defaultValue = userName ?? "Guest";        // nullish coalescing
anotherValue = userName || "Anonymous";    // OR operator (also catches 0, "")

console.log("17. Default value:", defaultValue);
console.log("18. OR value:", anotherValue);
