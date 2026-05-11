let a = 10;
console.log(a); //global scope

//Definition of the function
function printHello() {
    console.log("Hello 'The Test Academy!'");
    let a = 20; //local scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); //30
    }
    console.log("F ->", a); //20
}

console.log("G -> ", a); //10
printHello();
