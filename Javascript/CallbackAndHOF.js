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

// const products = [
//   { name: "Laptop", price: 1200, inStock: true },
//   { name: "Mouse", price: 25, inStock: true },
//   { name: "Keyboard", price: 75, inStock: false },
//   { name: "Monitor", price: 300, inStock: true },
// ];

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

// const users = [
//   { name: "Alex", hobbies: ["coding", "cooking"] },
//   { name: "Sam", hobbies: ["cooking", "gaming"] },
//   { name: "Jamie", hobbies: ["reading", "coding"] },
//   { name: "Jamie", hobbies: ["reading", "cooking"] },
// ];

// const myHashSet = new Set();

// const ans = users.reduce(function (acc, currObj) {
//   acc.add(currObj.hobbies[0]);
//   acc.add(currObj.hobbies[1]);
//   return acc;
// }, myHashSet);

// console.log(ans);

// Question 5

// Falsy values of JS -- "" , undefined , null , 0 , false , NAN
// const books = [
//   { title: "Dune", genre: "Sci-Fi" },
//   { title: "The Hobbit", genre: "Fantasy" },
//   { title: "Neuromancer", genre: "Sci-Fi" },
// ];

// Expected Output
//{
//   "Sci-Fi": ["Dune", "Neuromancer"],
//   "Fantasy": ["The Hobbit"]
// }

// const ans = books.reduce(function (acc, currObj) {
//   let { genre, title } = currObj;
//   if (acc[genre]) {
//     acc[genre].push(title);
//   } else {
//     acc[genre] = [title];
//   }
//   return acc;
// }, {});

// console.log(ans);

// Question 6 --  Given an array of employee objects,  to get the full names of
// employees who work in the "Engineering" department and earn more than $90,000.

// const employees = [
//   { name: "Alice", dept: "Engineering", salary: 95000 },
//   { name: "Bob", dept: "HR", salary: 50000 },
//   { name: "Charlie", dept: "Engineering", salary: 85000 },
//   { name: "David", dept: "Engineering", salary: 120000 },
// ];

// const ans = employees
//   .filter(function (currObj) {
//     return currObj.dept == "Engineering" && currObj.salary > 90000;
//   })
//   .map(function (currObj) {
//     return currObj.name;
//   });

// console.log(ans);

// Expected Output: ["Alice", "David"]

// Question 7  -- Use HOF  to find the entire product object that has
//  the highest rating. If there is a tie, return the first one.
const products = [
  { id: 101, name: "Keyboard", rating: 4.2 },
  { id: 102, name: "Camera", rating: 4.8 },
  { id: 103, name: "Headphones", rating: 4.5 },
];

const ans = products.reduce(function (acc, currObj) {
  return acc.rating > currObj.rating ? acc : currObj;
});

console.log(ans)

//  Expected Output: { id: 102, name: "Camera", rating: 4.8 }

// Question 8

const usersList = [
  { id: "u1", name: "Emma", role: "Admin" },
  { id: "u2", name: "Liam", role: "User" },
];

// Expected Output
// {
//   "u1": { id: "u1", name: "Emma", role: "Admin" },
//   "u2": { id: "u2", name: "Liam", role: "User" }
// }

// Question 9 -- find the average score of students who passed (scored 50 or above).

const students = [
  { name: "Tom", score: 45 },
  { name: "Sara", score: 80 },
  { name: "Ben", score: 90 },
  { name: "Lucy", score: 30 },
];

// Expected Output: 85

// Question 10 Given a string of text, split it into words, and use reduce to count how many times each word appears.
// Convert all words to lowercase so the count is case-insensitive.

//Input: "The cat chased the mouse and the mouse ran away"

// Expected Output -- { the: 3, cat: 1, chased: 1, mouse: 2, and: 1, ran: 1, away: 1 }
