const addBtn = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskAdderTextArea = document.getElementById("textarea");
const priotityColors2 = document.querySelector(".priotityColors2");

let selectedColor = "red";

addBtn.addEventListener("click", function () {
  taskAdderContainer.classList.toggle("hide");
});

taskAdderTextArea.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key !== "Enter") {
    return;
  }
  const task = taskAdderTextArea.value;
  //   console.log(task);
});

priotityColors2.addEventListener("click", function (event) {
  const selectedElement = event.target;

  if (selectedElement.classList[0] == "priotityColors2") {
    return;
  }

  selectedColor = selectedElement.classList[1];
  console.log(selectedColor);
});
