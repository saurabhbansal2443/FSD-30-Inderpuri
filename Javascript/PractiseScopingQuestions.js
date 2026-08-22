// Question 1 
// console.log(foo);
// var foo = 10;
// function foo() {
//   console.log("Hello");
// }
// console.log(foo);

// Question 2 
// let x = 5;
// function test() {
//   console.log(x);
//   if (true) {
//     let x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// test();

// Question 3 
// let b = 100;
// function tdzCheck() {
//   console.log(b);
//   let b = 50;
// }
// tdzCheck();

// Question 4 
// var a = 1;
// if (true) {
//   var a = 2;
//   let b = 3;
// }
// console.log(a);
// console.log( b);


// Question 5 

let x = 10;

function scopeTest(x) {
  console.log(x);
  x = 20;
  console.log(x);
}

scopeTest();
console.log(x);