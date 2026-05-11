let l = 10;
console.log(l);

//let is block-scoped

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt: ", retryCount);

//let retryCount =5; Syntax Error

if (testStatus = "pending") {
    let executionTime = 1200;
    console.log("Inside block", executionTime);
}

// console.log(executionTime); //ReferenceError: executionTime is not defined

// {} - Block
// if() {}
// function name(){}

let name = "pending";
name = "done";
{
    let name = "success";
    console.log(name);
}
console.log(name);