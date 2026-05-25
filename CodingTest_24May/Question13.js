function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {

    // Return READY only if all are true booleans
    if (
        hasSetup === true &&
        hasPractice === true &&
        hasNotes === true
    ) {
        return "READY";
    }

    // Otherwise return BLOCKED
    return "BLOCKED";
}

console.log(
    checkJsBasicsReadinessGate(true, true, true)
);

// READY


console.log(
    checkJsBasicsReadinessGate(true, false, true)
);

// BLOCKED


console.log(
    checkJsBasicsReadinessGate("true", true, true)
);

// BLOCKED