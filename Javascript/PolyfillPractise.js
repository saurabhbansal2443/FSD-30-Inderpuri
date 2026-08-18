// Pollyfill --

// Map Pollyfill

let arr = [100, 200, 300, 400];
function cb(ele, index, arr) {
  return ele * 2;
}
// let ans = arr.map(cb);
// console.log(ans);

Array.prototype.customMap = function (cb) {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let cbRes = cb(arr[i], i, arr);
    res.push(cbRes);
  }
  return res;
};

let ans = arr.customMap(cb);

console.log(ans);
