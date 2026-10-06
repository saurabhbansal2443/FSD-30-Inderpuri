// SetTimeout --> in built function which
// takes a callback function and run it after
// specific time

// console.log("Start");
// setTimeout(function(){
//     console.log("Timeout called")
// },2000)
// console.log("End");

// Sandwich Process

// 1) Cut The bread
// 2) Add Stuffings
// 4) Bake the sandwich


function CutTheBread(cb) {
  console.log("Cut the bread started ");
  setTimeout(function () {
    let cuttedBread = "🍞";
    console.log("Bread is cutted");
    cb(cuttedBread);
  }, 2000);
}

function AddStuffings(cb) {
  console.log("Add stuffing started ");
  setTimeout(function () {
    let stuffing = "🍞" + "🥔";
    console.log("Stuffing is done");
    cb(stuffing);
  }, 2000);
}
function BakeTheBread(cb) {
  console.log("bakeing is started ");
  setTimeout(function () {
    let sandwich = "🥪";
    console.log("Sandwich is baked");
    cb(sandwich);
  }, 2000);
}

console.log("Start");

CutTheBread(function (cuttedBread) {
  console.log(cuttedBread);
  AddStuffings(function (stuffedBread) {
    console.log(stuffedBread);
    BakeTheBread(function (sandwich) {
      console.log(sandwich);
    });
  });
});
