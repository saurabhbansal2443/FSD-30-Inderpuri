// Closures -- Function combined with its lexical scope is closure or a function always
//             remeber its lexical scope

function counter() {
  let count = 0;

  function enter() {
    count++;
    console.log(count);
  }

  function exit() {
    count--;
    console.log(count);
  }
}

enter();
enter();
exit();
enter();
enter();
count = 59;
enter();
enter();
exit();
