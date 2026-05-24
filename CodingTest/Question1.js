//1. Create a reusable label normalizer for JavaScript QA utilities.


function normalizeJsBasicsLabel(label) {
    // Trim spaces and convert to lowercase
    let result = label.trim().toLowerCase();

    // Replace non-alphanumeric groups with single hyphen
    result = result.replace(/[^a-z0-9]+/g, "-");

    // Remove leading/trailing hyphens if any
    result = result.replace(/^-+|-+$/g, "");

    // Add prefix
    return result ? `js-basic-${result}` : "js-basic";
}

console.log(normalizeJsBasicsLabel(" Login Button "));
// js-basic-login-button

console.log(normalizeJsBasicsLabel("User Profile: Edit!"));
// js-basic-user-profile-edit

console.log(normalizeJsBasicsLabel("---Search@@Box---"));
// js-basic-search-box

console.log(normalizeJsBasicsLabel(" "));