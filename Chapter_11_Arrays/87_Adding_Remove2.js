let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]

//Removes elements from an array and, 
// if necessary, 
// inserts new elements in their place, 
// returning the deleted elements.
//splice(start: number, deleteCount?: number | undefined)
arr.splice(2, 1);
console.log(arr); //[ 1, 2, 4, 5, 6 ]

arr.splice(2, 0, 99); //add
console.log(arr); //[ 1, 2, 99, 4, 5, 6 ]

arr.splice(2, 1, 90); //replace
console.log(arr); //[ 1, 2, 90, 4, 5, 6 ]

arr.splice(1, 2, 10, 20);
console.log(arr); //[ 1, 10, 20, 4, 5, 6 ]