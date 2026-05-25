//3. Build a score classifier for practice readiness levels.


function classifyPracticeReadiness(score) {
    if (score >= 90) {
        return "EXCELLENT";
    } else if (score >= 75) {
        return "GOOD";
    } else if (score >= 50) {
        return "NEEDS_PRACTICE";
    } else {
        return "REVISIT";
    }
}


console.log(classifyPracticeReadiness(95));
// EXCELLENT

console.log(classifyPracticeReadiness(80));
// GOOD

console.log(classifyPracticeReadiness(65));
// NEEDS_PRACTICE

console.log(classifyPracticeReadiness(40));
// REVISIT