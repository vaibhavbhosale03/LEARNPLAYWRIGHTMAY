let scores = [45, 82, 91, 60, 73];

// map - transforms every element, return a new array
let grades = scores.map(s => s > 70 ? "PASS" : "FAIL");
console.log(grades); //[ 'FAIL', 'PASS', 'PASS', 'FAIL', 'PASS' ]

//filter -keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing); //[ 82, 91, 73 ]

//reduce - accumulates to a single value
// let total = scores.reduce((sum, s) => sum + s, 0);
let total = scores.reduce((a, b) => a + b, 0);

console.log(total); //351

//flat -- flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());