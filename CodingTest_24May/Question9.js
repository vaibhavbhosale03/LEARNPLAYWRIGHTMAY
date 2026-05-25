function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {

    // Trim suite name
    let suite = suiteName.trim();

    // Trim and lowercase environment
    let env = environment.trim().toLowerCase();

    // Create build label
    let build = "build-" + buildNumber;

    // Join all parts
    return suite + " | " + env + " | " + build;
}

console.log(
    buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
);

// Smoke Suite | staging | build-42


console.log(
    buildJsBasicsRunLabel("Regression", "PROD", 7)
);

// Regression | prod | build-7