let results = ["pass", "fail", "pass", "error", "fail"];

results.indexOf("fail");
results.indexOf("skip");

results.lastIndexOf("fail");

results.includes("error"); //true
results.includes("skip"); //false

console.log(results);

let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r); //25

let p = nums.findIndex(n => n > 20);
console.log(p); //1

let q = nums.findLast(n => n > 20); //45
console.log(q); //45

let x = nums.findLastIndex(n => n > 20); //3
console.log(x); //3