//4. Create a lookup function for JavaScript basics keywords and meanings.

function getJsBasicsKeywordMeaning(term) {
    // Normalize input
    term = term.trim().toLowerCase();

    // Keyword mapping
    const keywordMap = {
        node: "runtime",
        v8: "engine",
        npm: "package-manager"
    };

    // Return mapped value or unknown
    return keywordMap[term] || "unknown";
}

console.log(getJsBasicsKeywordMeaning("NODE"));
// runtime

console.log(getJsBasicsKeywordMeaning(" v8 "));
// engine

console.log(getJsBasicsKeywordMeaning("npm"));
// package-manager

console.log(getJsBasicsKeywordMeaning("not-a-topic"));
// unknown