// import Harsh from "./Maths.js";
// import { sum, sub, div } from "./Maths.js";

// console.log(sum(2, 3));

import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("S");
  console.log(text);
}

doStuff();