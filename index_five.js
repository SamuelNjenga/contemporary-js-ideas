// Code Hoisting

// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
// However in JavaScript, initializations are not hoisted.
console.log(test_one);
var test_one = "Sam Njenga the Tester";

// Above is similar to
var test_two;
console.log(test_two);
test_two = "Sam Njenga the Coder";

test_three = "Sam Njenga the CI/CD guy";
console.log(test_three);
var test_three;

// If a variable is used with the let keyword, that variable is not hoisted.
// test_four = 5;
// console.log(test_four);
let test_four; // error

// A function can be called before declaring it.
greet_js();

function greet_js() {
  console.log("Hi, there.");
}

// However, when a function is used as an expression, an error occurs because only declarations are hoisted
// greet_java();

// let greet_java = function () {
//   console.log("Hi, there.");
// };
