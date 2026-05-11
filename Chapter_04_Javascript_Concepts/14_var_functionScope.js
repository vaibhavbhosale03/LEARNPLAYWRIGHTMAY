//Definition of the function
var a = 10;
console.log(a); //global scope

function printHello() {
    console.log("Hello 'The Test Academy!'");
    var a = 20; //local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("F ->", a);
}

printHello();
console.log(a);