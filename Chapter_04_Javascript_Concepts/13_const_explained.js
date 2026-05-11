//Block-scoped
//Redeclartion not allowed
//Reassignment not allowed

const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https://staging.thetestingacademy.com/";
// TypeError: Assignment to constant variable.

let name = "pending";
name = "done";
{
    let name = "success";
    console.log(name);
}
console.log(name);