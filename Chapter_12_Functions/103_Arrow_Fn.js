const greet = function (name) {
    return name;
}

let result = greet("Vaibhav");
console.log(result);

const greet2 = (name1) => "Hi " + name1;
let r2 = greet2("Vaib");
console.log(r2);

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name2 => console.log(name2);
printIt("Dutta");