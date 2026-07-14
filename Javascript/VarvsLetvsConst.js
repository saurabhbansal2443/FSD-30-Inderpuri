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

console.log(a);
one();
var a = 10;
function one() {
    var a = 99;
    console.log(a);
    function two() {
        console.log(a);
        a = 199;
    }
    console.log(a);
    two();
    console.log(a);
}

console.log(a);
