//let is Block-Scoped

let x = "global";
if (true) {

    //TDZ for block scoped "x" starts here
    //console.log(x); //ReferenceError (Not "global" variable)

    let x = "block";
    console.log(x);
}

console.log(x);