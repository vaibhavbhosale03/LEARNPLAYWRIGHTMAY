// n = 3a
// *
// * *
// * * *
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}

console.log("reverse");

let m = 5;
for (let i = 1; i <= m; i++) {
    let row = " ";
    for (let j = m; j >= i; j--) {
        row += "*";
    }
    console.log(row.trim());
}