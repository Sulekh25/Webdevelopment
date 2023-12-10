// Variables
var name = "John Doe";
let age = 25;
const PI = 3.14159265359;

// Control Structures
// if-else statement
if (age >= 18) {
 console.log("You are eligible to vote.");
} else {
 console.log("You are not eligible to vote.");
}

// switch statement
switch (name) {
 case "John Doe":
    console.log("You are John Doe.");
    break;
 case "Jane Doe":
    console.log("You are Jane Doe.");
    break;
 default:
    console.log("You are neither John Doe nor Jane Doe.");
}

// while loop
let count = 0;
while (count < 5) {
 console.log("The count is: " + count);
 count++;
}

// for loop
for (let i = 0; i < 5; i++) {
 console.log("The value of i is: " + i);
}

// do-while loop
let n = 0;
do {
 console.log("The value of n is: " + n);
 n++;
} while (n < 5);

// for-in loop
let person = {
 firstName: "John",
 lastName: "Doe",
 age: 25
};
for (let property in person) {
 console.log(property + ": " + person[property]);
}

// break statement
let countToTen = 0;
while (true) {
 if (countToTen >= 10) {
    break;
 }
 console.log("The count is: " + countToTen);
 countToTen++;
}

// continue statement
for (let i = 0; i < 10; i++) {
 if (i % 2 === 0) {
    continue;
 }
 console.log("The value of i is: " + i);
}

// label statement
label:
for (let i = 0; i < 3; i++) {
 for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break label;
    }
    console.log("The value of i is: " + i + " and the value of j is: " + j);
 }
}