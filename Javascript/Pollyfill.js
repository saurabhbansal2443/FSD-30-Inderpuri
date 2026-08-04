// MAP

// let arr = [1, 2, 3, 4, 5];

// function cb(ele) {
//   return ele / 2;
// }

// let ans1 = arr.map(cb);

// console.log(ans1);

// Polyfill of Map function

// Array.prototype.customMap = function (cb) {
//   let inputArray = this;
//   let arr2 = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     let res = cb(inputArray[i], i, inputArray);
//     arr2.push(res);
//   }

//   return arr2;
// };

// let ans2 = arr.customMap(cb);

// console.log(ans2);

// Polyfill of filter function

// let arr = [1, 2, 3, 4, 7, 5, 6];

// function cb(ele) {
//   return ele % 2 == 0;
// }

// Array.prototype.customFilter = function (cb) {
//   let inputArray = this;
//   let ans = [];

//   for (let i = 0; i < inputArray.length; i++) {
//     let res = cb(inputArray[i], i, inputArray);

//     if (res) {
//       ans.push(inputArray[i]);
//     }
//   }

//   return ans;
// };

// let ans = arr.customFilter(cb);

// console.log(ans);

// Pollyfill of reduce

let arr = [1, 2, 3, 4, 5];

let cb = function (acc, currEle) {
  return acc + currEle;
};

// let sum1 = arr.reduce(cb);

// let sum2 = arr.reduce(cb, 10);



Array.prototype.customReduce = function (cb, defaultValue) {
  let inputArray = this;

  let index = 0;
  let acc = defaultValue;

  if (!defaultValue) {
    index = 1;
    acc = inputArray[0];
  }

  while (index < inputArray.length) {
    acc = cb(acc, inputArray[index]);
    index++;
  }
  return acc;
};
let sum1 = arr.customReduce(cb); 
let sum2 = arr.customReduce(cb,10)

console.log(sum1, sum2);
