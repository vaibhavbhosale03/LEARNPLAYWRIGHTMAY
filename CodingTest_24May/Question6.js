function countPassingJsBasicsChecks(results) {

    let count = 0;

    for (let i = 0; i < results.length; i++) {

        // Convert to lowercase
        let normalized = results[i].toLowerCase();

        // Check if "pass" exists
        if (normalized.includes("pass")) {
            count++;
        }
    }

    return count;
}

console.log(countPassingJsBasicsChecks([
    "login-pass",
    "api-fail",
    "logout-pass"
]));
// 2

console.log(countPassingJsBasicsChecks([
    "SETUP PASS",
    "CONFIG PASS"
]));
// 2

console.log(countPassingJsBasicsChecks([
    "one-fail",
    "two-skip"
]));
// 0