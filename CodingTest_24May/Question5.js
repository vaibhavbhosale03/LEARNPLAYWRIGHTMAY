//Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

// Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.

// Rules:
// - Trim and lowercase each item.
// - Allow known aliases from the chapter group.
// - Return canonical topic keys in first-seen order.
// - Skip unsupported values.

// Case 1
// Input: filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])

// Expected: ["node","v8"]

// Case 2
// Input: filterSupportedJsBasicsTopics(["node","runtime","node"])

// Expected: ["node"]

// Case 3
// Input: filterSupportedJsBasicsTopics(["npm","node","v8"])

// Expected: ["npm","node","v8"]