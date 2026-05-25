//2. Write a validator for JavaScript helper function and variable names.


function isValidJsBasicsIdentifier(name) {

    // Check if value is a string
    if (typeof name !== "string") {
        return false;
    }

    // Trim spaces
    name = name.trim();

    // Check for empty string
    if (name.length === 0) {
        return false;
    }

    // Reserved keywords
    const reservedWords = [
        "let",
        "const",
        "var",
        "class",
        "function",
        "return"
    ];

    // Reject reserved words
    if (reservedWords.includes(name)) {
        return false;
    }

    // Validate identifier pattern
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
}

console.log(isValidJsBasicsIdentifier("loginButton"));
// true

console.log(isValidJsBasicsIdentifier("$submit"));
// true

console.log(isValidJsBasicsIdentifier("1login"));
// false

console.log(isValidJsBasicsIdentifier("let"));
// false