//Program : Even or ODD

let number = 6;
if (number % 2 === 0) {
    console.log("It is even number");
} else {
    console.log("It is ODD number");
}

// Program : Score Card
let score = 55;

if (score >= 90) {
    console.log("A")
} else if (score >= 80 && score <= 89) {
    console.log("B");
} else if (score >= 70 && score <= 79) {
    console.log("C");
} else if (score >= 69 && score <= 60) {
    console.log("D");
} else {
    console.log("Fail");
    console.log("Plan to study");
}

//Program 3 : Leap Year

let Year = 2012;

if ((Year % 4 === 0 && Year % 100 !== 0) || (Year % 400 === 0)) {
    console.log("Its a Leap Year");
} else {
    console.log("It is not a leap year");
}