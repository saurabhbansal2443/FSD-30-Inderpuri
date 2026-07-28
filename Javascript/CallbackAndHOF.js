// A function when passed to another function as a argument is Callback function
// A callback is never called it executions depednds on parent function
// callback function is possible because a function can be stored in variable

// let sum = function (a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mult(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

// function calc(a, b, cb) {
//   return cb(a, b);
// }

// console.log(calc(1, 3, mult));

// Higher Order Functions --  A function which takes one or more function
// as argument/parameter and also can return a function

// forEach , map , filter , reduce

// let arr = [100, 200, 300, 400];

// const print = function (ele, index, arr) {
//   console.log(ele, index, arr);
// };

// arr.forEach(print);

// arr.forEach(function (ele, index, arr) {
//   console.log(ele, index, arr);
// })

// arr.forEach(function (ele, index, arr) {
//   arr[index] = ele + 1;
// });

// console.log(arr);

// arr.forEach(function (ele, index, arr) {
//   arr[index] = ele + 1;
// });
// console.log(arr);

// Pure Functions -- the function  that gives same output for same input is pure functions
// pure functions have no side effects means they do not interfare with outer scope

// MAP --

let arr = [1, 2, 3, 4];

// let ans = arr.map(function (ele, index, arr) {
//   return ele * 2;
// });

// console.log(ans);

// filter --

// let ans = arr.filter(function (ele, index, arr) {
//   return ele % 2 == 0;
// });

// console.log(ans);

// reduce --

// let ans = arr.reduce(function (acc, currEle) {
//   return acc + currEle;
// }, 10 );

// console.log(ans);

// Question 1  -- make a array of products which are in stock and have price greater than 50

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Monitor", price: 300, inStock: true },
];

// const ans = products.filter(function (obj) {
//   // return  obj.inStock && obj.price > 50
//   const { price, inStock } = obj;
//   return inStock && price > 50;
// });

// console.log(ans);

// Question 2  A database migration left user accounts with messy usernames.
// Convert an array of raw strings into standardized lowercase names prefixed with an @ symbol.

const rawNames = ["  Alice ", "bOB", "  ChArLiE  "];

// Expected Output: [ '@alice', '@bob', '@charlie' ]

// const ans = rawNames.map(function (name) {
//   return "@" + name.trim().toLowerCase();
// });

// console.log(ans);

// Question 3 --  Calculate the final checkout price of a user's shopping cart, accounting for the quantity of each item

const cart = [
  { item: "Book", price: 15, quantity: 2 },
  { item: "Pen", price: 2, quantity: 5 },
  { item: "Bag", price: 40, quantity: 1 },
];

// const ans = cart.reduce(function (acc, obj) {
//   return acc + obj.quantity * obj.price;
// }, 0);

// console.log(ans);

// question 4 -- Given a list of user profiles, extract a unique list of all hobbies listed across all users.

// Expected Output: [ 'coding', 'cooking', 'gaming', 'reading' ]

const users = [
  { name: "Alex", hobbies: ["coding", "cooking"] },
  { name: "Sam", hobbies: ["cooking", "gaming"] },
  { name: "Jamie", hobbies: ["reading", "coding"] },
  { name: "Jamie", hobbies: ["reading", "cooking"] },
];

const myHashSet = new Set();

const ans = users.reduce(function (acc, currObj) {
  acc.add(currObj.hobbies[0]);
  acc.add(currObj.hobbies[1]);
  return acc;
}, myHashSet);

console.log(ans);
