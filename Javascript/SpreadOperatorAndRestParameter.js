// Spread Operator

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let res = [1,2,3,4,5,6,7,8,9,10 ];

// let res = [...arr1, ...arr2];

// let obj1 = {
//   name: "AJAY",
//   age: 57,
// };

// let obj2 = {
//   age: 99,
//   address: "Bhopal",
// };

// let res = { ...obj2, ...obj1 };

// console.log(res);

// function sum(a, b) {
//   return a + b;
// }

// function sum2(a, b, c) {
//   return a + b + c;
// }

// Rest Parameters

// function sum(...args) {
//   let arr = args;

//   return arr.reduce(function (acc, currEle) {
//     return acc + currEle;
//   }, 0);
// }

// console.log(sum(1, 2, 3, 4, 46));

function sum(a, b, ...args) {
  console.log(a, b);
  let arr = args;
  return arr.reduce(function (acc, currEle) {
    return acc + currEle;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 46));
