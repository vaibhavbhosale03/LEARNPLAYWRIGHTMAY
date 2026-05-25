let arr = [1, 2, 3];
console.log(arr); //[ 1, 2, 3 ]

//Add to end
arr.push(4);
console.log(arr); //[ 1, 2, 3, 4 ]

//Remove from End
arr.pop();
console.log(arr); //[ 1, 2, 3 ]

//Add to beginning
arr.unshift(0);
console.log(arr); //[ 0, 1, 2, 3 ]

//Remove from Beginning
arr.shift();
console.log(arr); //[ 1, 2, 3 ]

arr.push(5, 6);
console.log(arr); //[ 1, 2, 3, 5, 6 ]

arr.unshift(0);
console.log(arr); //[ 0, 1, 2, 3, 5, 6 ]

console.log(arr);
arr.unshift(100);
console.log(arr);
arr.shift();
console.log(arr);