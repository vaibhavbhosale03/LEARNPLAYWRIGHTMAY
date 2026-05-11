var a = 10;

//var is function-scoped


console.log(a); //global scope

function printHello() {
    console.log("Hello 'The Test Academy!'");
    var a = 20; //local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }

}

printHello();
console.log(a);