// let obj = {
//   name: "Ajay",
//   age: 20,
//   address: {
//     state: "delhi",
//   },
// };

// const { name, age, address } = obj;
// const { state } = address;

// console.log(name, age, state);

// let arr = ["a", "b", "c", "d", "e", "f"];

// let [one, two, , four] = arr;

// console.log(one, two, four);

// String Literals

let name = "Ajay";
let age = 29;
let message = "hello";

function greet(message, name, age) {
  //   return message + "Mr " + name + ", welcome to JS Code " + "the age is " + age;
  // How to do the same thing using string literals

  return `${message} Mr ${name}, welcome to js code the age is ${age}`;
}

console.log(greet(message, name, age));
