// // Pollyfill --

// // Map Pollyfill

// let arr = [100, 200, 300, 400];
// function cb(ele, index, arr) {
//   return ele * 2;
// }
// // let ans = arr.map(cb);
// // console.log(ans);

// Array.prototype.customMap = function (cb) {
//   let arr = this;
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let cbRes = cb(arr[i], i, arr);
//     res.push(cbRes);
//   }
//   return res;
// };

// let ans = arr.customMap(cb);

// console.log(ans);

// Filter --

let arr = [1, 2, 3, 4, 5];
function cb(ele, index, arr) {
  return ele % 2 == 0;
}
// let ans = arr.filter(cb);
// console.log(ans);
Array.prototype.customFilter = function (cb) {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let cbRes = cb(arr[i], i, arr);
    if (cbRes == true) {
      res.push(arr[i]);
    }
  }
  return res;
};
let ans = arr.customFilter(cb);
console.log(ans);
