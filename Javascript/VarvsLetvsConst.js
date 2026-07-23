// VAR vs LET vs CONST

// Redeclartion -> Var can be redeclared , let and const  cannot be

// const a = 10;
// const a = 99;

// console.log(a);

// Reintialize -->  var and let can be reintialize , const cannot be
// const a = 100;

// console.log(a);

// Reassign -- var and let can be assign , const cannot be reassign

// const a = 10;
// a = 100;

// console.log(a);

// Hoisting -- variables and functions will get the memory
// before the actual code execution

// console.log(a);
// greet();
// console.log(a);
// var a = 10;
// function greet() {
//   console.log(a);
//   a = 99;
//   console.log(a);
// }

// console.log(a);

// console.log(a);
// greet();
// console.log(a);
// var a = 10;
// function greet() {
//   console.log(a);
//   var a = 99;
//   console.log(a);
// }

// console.log(a);

// console.log(a);
// one();
// var a = 10;
// function one() {
//     var a = 99;
//     console.log(a);
//     function two() {
//         console.log(a);
//         a = 199;
//     }
//     console.log(a);
//     two();
//     console.log(a);
// }

// console.log(a);

// Scope --

// var is function scope , let and const are block {} scope
// var let and const are function scope reason
// a) functions is also a block of code
// b) function execution context is deleted after the execution of code that's why all the memore it takes also get's deleted
// let and const are block scope

// function hey() {
//   let a = 99;
//   console.log(a);
// }

// hey();
// console.log(a);

// Let and const

//  console.log(a);
// let a = 10;
// console.log(a);
// abc();
// console.log(a);
// function abc() {
//   console.log(a);
//   a = 999;
//   console.log(a);
// }
//

// SCOPE --
// var is function scope , let const are block scope
// var let and const are function scope because function is also a block
// console.log(a);
// var a = 10;
// function abc() {
//   let a = 99;
//   console.log(a);
// }
// abc();
// console.log(a);

// console.log(a);
// console.log(b);
// var a = 100;
// var b = 99;
// console.log(a);
// console.log(b);
// function abc() {
//   console.log(a);
//   var a = 199;
//   b = 199;
//   console.log(a);
//   console.log(b);
//   function def() {
//     var x = 100;
//     console.log(x);
//     console.log(a);
//     console.log(b);
//     xyz();
//     function xyz() {
//       console.log(x);
//       console.log(a);
//       console.log(b);
//     }
//     b = 999;
//   }

//   def();
// }
// abc();
// console.log(x);
// console.log(a);
// console.log(b);

// Global Scope --  anything which is out of block or function is called Global Scope

// var a = 10;

// let b = 1000;

// function greet() {
//   console.log("abc");
//   // function abc() {}
// }

// Block Scope

{
  var a = 10;
  let b = 99;
  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);
