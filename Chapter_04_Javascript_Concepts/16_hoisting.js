//JS Engine
// Line by Line, JIT Compilation

console.log(greeting); //undefined

var greeting = "Hello";
console.log(greeting);

//Behind the scene

//var greeting; <-- hoisted with undefined
//console.log(greeting); <-- undefined
//greeting ="Hello!"; <--assignment stays in place
//console.log(greeting); <-- "Hello!"

console.log(a);
var a = "Pramod";
console.log(a);