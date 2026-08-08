// Spread Operator

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let res = [1,2,3,4,5,6,7,8,9,10 ];

// let res = [...arr1, ...arr2];

let obj1 = {
  name: "AJAY",
  age: 57,
};

let obj2 = {
  age: 99,
  address: "Bhopal",
};

let res = { ...obj2, ...obj1 };

console.log(res);
