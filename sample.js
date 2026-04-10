let a = 45;
let pi = 3.14;
console.log(a);
console.log(pi);
let s="hello , world!";
console.log(s)
let bool = true
console.log(bool)
let empty = null;
console.log(empty)
let undefined;
console.log(undefined);
const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);
let n=10
n +=5;
n -=3;
n *=2;
n /=4;
console.log(n)
const c = true, b = false;
console.log(c && b); // Logical AND
console.log(c || b); // Logical OR
console.log(10 > 5);
console.log(10 === "10");
let z=5;
console.log(--z)
const num = 5;

if (num > 0) {
    console.log("The number is positive.");
};
let number =-10

if (num > 0)
    console.log("The number is positive.");
else
    console.log("The number is negative");
let nuber = 5;

switch (nuber) {
    case 0:
        console.log("Nuber is zero.");
        break;
    case 1:
        console.log("Nuber is one.");
        break;
    case 2:
        console.log("Nuber is two.");
        break;
    default:
        console.log("Nuber is greater than 2.");
};
for (let i =0; i<=3; i++) {
    console.log("HELLO");
}
for (let i=0; i<10; i++) {
    if (i%2==0) {
        console.log(i);
    }
} 
for (let i=0; i<10; i++ )  {
    if (i % 2 != 0)
        console.log(i);
}
let i =0;
while(i<=10) {
    console.log(i); 
    i++;
}
let j=0;
while(j<=10) {
    if (j % 2 == 0){
        console.log("even numbers",j);
    }
    j++;
}
