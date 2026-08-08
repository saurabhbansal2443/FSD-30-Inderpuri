let obj1 = {
  name: "Ajay",
  age: 29,
  address: {
    city: "Bhopal",
    state: "MP",
  },
};
// Shallow Copy
// let obj2 = obj1;

// Deep Copy
// let obj2 = JSON.parse(JSON.stringify(obj1));

// Spread Operator creates a combination of shallow  and Deep copy --
//the first level is always deep copied and other levels shallow copy

// let obj2 = { ...obj1 };



obj2.age = 99;
obj2.address.city = "Delhi";

console.log("obj1", obj1);
console.log("obj2", obj2);
