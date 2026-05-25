function summarizeJsBasicsResults(results) {

    let summary = {
        total: results.length,
        passed: 0,
        failed: 0,
        skipped: 0
    };

    for (let i = 0; i < results.length; i++) {

        // Convert to lowercase
        let item = results[i].toLowerCase();

        // Check result type
        if (item.includes("pass")) {
            summary.passed++;
        }
        else if (item.includes("fail")) {
            summary.failed++;
        }
        else if (item.includes("skip")) {
            summary.skipped++;
        }
    }

    return summary;

}

console.log(
    summarizeJsBasicsResults([
        "login-pass",
        "api-fail",
        "profile-skip"
    ])
);

// { total: 3, passed: 1, failed: 1, skipped: 1 }


console.log(summarizeJsBasicsResults([]));

// { total: 0, passed: 0, failed: 0, skipped: 0 }


console.log(
    summarizeJsBasicsResults([
        "a-pass",
        "b-pass"
    ])
);

// { total: 2, passed: 2, failed: 0, skipped: 0 }