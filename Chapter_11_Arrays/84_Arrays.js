let browsers = ["Chrome", "Firefox", "Safari"];

//Array constructor

let scores = new Array(3);
let scores2 = new Array(1, 2, 3);
console.log(scores); //[ <3 empty items> ]
console.log(scores2); //[ 1, 2, 3 ]

let numbers = new Array(100, 200, 300, 400);
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test); //[ 10, 20, 30, 40, 50 ]

let chars = Array.from("hello");
console.log(chars); //[ 'h', 'e', 'l', 'l', 'o' ]

// let numbers1 = Array.from("123456789");
// console.log(numbers1);