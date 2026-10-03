const addBtn = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskAdderTextArea = document.getElementById("textarea");
const priotityColors2 = document.querySelector(".priotityColors2");
const allColorsOfTaskAdder = document.querySelectorAll(".color2");
const ticketContainer = document.querySelector(".taskContainer");
const deleteBtn = document.getElementById("delete");
const priorityColorContainer = document.querySelector(".priotityColors");
const allTaskIcon = document.getElementById("all");

// console.log(allColorsOfTaskAdder);
const allColors = ["red", "blue", "green", "orange"];

const lockIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"></path></svg>';
const unlockIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="red"><path d="M7 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C14.7405 2 17.1131 3.5748 18.2624 5.86882L16.4731 6.76344C15.6522 5.12486 13.9575 4 12 4C9.23858 4 7 6.23858 7 9V10ZM5 12V20H19V12H5ZM10 15H14V17H10V15Z"></path></svg>';
let taskArray = [];
// [{task : "Hello from" , color : "red" , id : 56789} ]

priorityColorContainer.addEventListener("click", function (event) {
  const selectedElement = event.target;

  if (selectedElement.classList[0] == "priotityColors") {
    return;
  }

  const priorityColor = selectedElement.classList[1];

  const filteredTask = taskArray.filter(function (taskObj) {
    return taskObj.color == priorityColor;
  });

  ticketMaker(filteredTask);
});

allTaskIcon.addEventListener("click", function () {
  ticketMaker(taskArray);
});

let selectedColor = "red";

addBtn.addEventListener("click", hideTicketAdder);

let isDeleteActive = false;

deleteBtn.addEventListener("click", function () {
  isDeleteActive = !isDeleteActive;
  if (isDeleteActive) {
    deleteBtn.setAttribute("fill", "red");
  } else {
    deleteBtn.setAttribute("fill", "black");
  }
});

taskAdderTextArea.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key !== "Enter") {
    return;
  }
  const task = taskAdderTextArea.value;
  taskAdderTextArea.value = "";
  //   console.log(task);
  let taskObj = {
    task: task,
    color: selectedColor,
    id: Date.now(),
  };
  taskArray.push(taskObj);
  ticketMaker(taskArray);
  hideTicketAdder();
});

priotityColors2.addEventListener("click", function (event) {
  const selectedElement = event.target;

  if (selectedElement.classList[0] == "priotityColors2") {
    return;
  }

  selectedColor = selectedElement.classList[1];

  allColorsOfTaskAdder.forEach(function (element) {
    element.classList.remove("border");
  });

  selectedElement.classList.add("border");
  // console.log(selectedColor);
});

function ticketMaker(tArray) {
  ticketContainer.innerHTML = "";
  tArray.forEach(function (taskObj) {
    let { color, task, id } = taskObj;
    const ticketEle = document.createElement("div");
    ticketEle.classList.add("ticket");

    ticketEle.innerHTML = ` <div class="taskColor ${color}"></div>
        <div class="ticketTaskContainer">
          <p class="text" >${task}</p>
          <div class="lockContainer">
            ${lockIcon}
          </div>
        </div>`;

    const taskColorEle = ticketEle.querySelector(".taskColor");
    const lockContainer = ticketEle.querySelector(".lockContainer");
    const taskTextEle = ticketEle.querySelector(".text");

    let isEditable = false;

    taskColorEle.addEventListener("click", function () {
      let currentColor = taskObj.color;

      let currentColorIndex = allColors.indexOf(currentColor);

      let nextColorIndex = 0;

      if (currentColorIndex != allColors.length - 1) {
        nextColorIndex = currentColorIndex + 1;
      }
      let nextColor = allColors[nextColorIndex];

      // UI Layer
      taskColorEle.classList.remove(currentColor);
      taskColorEle.classList.add(nextColor);
      // Data Layer
      taskObj.color = nextColor;
    });

    ticketEle.addEventListener("dblclick", function () {
      if (isDeleteActive == false) return;
      // UI layer
      ticketContainer.removeChild(ticketEle);
      // Data Layer
      let filteredTask = taskArray.filter(function (taskObj) {
        return taskObj.id != id;
      });
      taskArray = filteredTask;
    });

    lockContainer.addEventListener("click", function () {
      isEditable = !isEditable;
      if (isEditable) {
        lockContainer.innerHTML = unlockIcon;
        // UI Layer
        taskTextEle.setAttribute("contentEditable", "true");
      } else {
        lockContainer.innerHTML = lockIcon;
        // UI Layer
        taskTextEle.setAttribute("contentEditable", "false");
        // Data Layer
        let newTaskText = taskTextEle.innerHTML;
        taskObj.task = newTaskText;
      }
    });

    ticketContainer.appendChild(ticketEle);
  });
}
function hideTicketAdder() {
  taskAdderContainer.classList.toggle("hide");
}
