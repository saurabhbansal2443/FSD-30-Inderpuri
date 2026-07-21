// A block {}  of code to perform a specific task

// function fibbonnaci(n) {
//   let ft = 0;
//   let st = 1;

//   for (let i = 1; i <= n; i++) {
//     let tt = ft + st;
//     console.log(ft);
//     ft = st;
//     st = tt;
//   }
// }

// fibbonnaci(5);

// function factorial(n) {
//   let ans = 1;

//   for (let i = 2; i <= n; i++) {
//     ans = ans * i;
//   }
//   return ans;
// }

// let res = factorial(5);

// console.log(res);

// Sum Of digits
// 149  == 14

// function sumOfDigits(n) {
//   let ans = 0;

//   while (n > 0) {
//     let lastDigit = n % 10;
//     ans = ans + lastDigit;
//     n = n / 10;
//   }

//   return ans;
// }

// let ans = sumOfDigits(149);

// console.log(ans);

//

// function greet() {
//   console.log("Hey Good Morning");
//      return 6
// }

// let ans = greet();
// console.log(ans);
// console.log(greet());

// greet()

// A function can be stored in variable

// let greet = function () {
//   console.log("Hey Good morning");
// };

// console.log(greet());

// functions -  function is a block {} of code to do a specific task

// function factorial(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   }
//   let ans = 1;

//   for (let i = 2; i <= n; i++) {
//     ans = ans * i;
//   }

//   return ans;
// }

// let answer = factorial(5);

// console.log(answer);

// function greet() {
//   console.log("Hello");
//   return 2
// }

// console.log(greet())

const greet = function () {
  console.log("greet");
};

greet()