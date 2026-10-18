// import Harsh from "./Maths.js";
// import { sum, sub, div } from "./Maths.js";

// console.log(sum(2, 3));

// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("HEllo World");
//   console.log(text);
// }

// doStuff();

// import os from "node:os";

// console.log(os.arch());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(os.version());
// console.log(os.machine());
// console.log(os.cpus());
// console.log(os.uptime());

import fs from "node:fs";

// console.log(fs);
console.log("Start");
// fs.writeFileSync("./abc.txt", "Hey i am created using FS");
// fs.writeFile("./def.txt", "Hey i am created", (errr) => {
//   console.log(errr);
// });
// fs.writeFileSync("./abc.txt", "Hey i am created using FS updated");
// fs.unlinkSync("./abc.txt");
// const data = fs.readFileSync("./def.txt", { encoding: "UTF-8" });
// console.log(data);

// fs.mkdirSync("./folder1");
// fs.mkdirSync("./folder1/folder2")
// fs.writeFileSync("./folder1/folder2/abc.txt", "Hey i am created");
fs.rmdirSync("./folder1/folder2");

console.log("End");
