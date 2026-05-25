function findFirstCriticalJsBasicsBug(bugs) {

    for (let i = 0; i < bugs.length; i++) {

        // Check severity
        if (bugs[i].severity === "critical") {
            return bugs[i].title;
        }
    }

    // If no critical bug found
    return "No critical bug";
}

console.log(
    findFirstCriticalJsBasicsBug([
        { title: "Typo", severity: "low" },
        { title: "Login crash", severity: "critical" }
    ])
);

// Login crash


console.log(
    findFirstCriticalJsBasicsBug([
        { title: "Spacing issue", severity: "low" }
    ])
);

// No critical bug