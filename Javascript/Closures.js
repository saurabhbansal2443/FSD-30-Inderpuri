// Closures -- Function combined with its lexical scope is closure or a function always
//             remeber its lexical scope

// function counter() {
//   let count = 0;

//   function enter() {
//     count++;
//     console.log(count);
//   }

//   function exit() {
//     count--;
//     console.log(count);
//   }

//   let obj = {
//     enter: enter,
//     exit: exit,
//   };

//   return obj;
// }

function counter() {
  let count = 0;
  return {
    enter: function () {
      count++;
      console.log(count);
    },
    exit: function exit() {
      count--;
      console.log(count);
    },
  };
}
// let obj = counter();
// let {enter , exit }  = obj ;
let { enter, exit } = counter();
enter();
enter();
exit();
enter();
enter();
count = 59;
enter();
enter();
exit();
