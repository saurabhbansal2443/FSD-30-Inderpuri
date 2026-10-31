import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setTask(event.target.value);
  };
  const handleAddBtnClick = () => {
    if (task.trim().length == 0) return;
    let taskObj = { task: task, id: Date.now() };
    setTaskArray([...taskArray, taskObj]);
    setTask("");
  };
  return (
    <div style={style.root}>
      {console.log(taskArray)}
      <div style={style.control}>
        <input
          value={task}
          onChange={handleInputChange}
          style={style.input}
          type="text"
        />
        <button onClick={handleAddBtnClick} style={style.addBtn}>
          Add
        </button>
      </div>
      <div style={style.taskContainer}>
        {taskArray.map(function (taskObj) {
          return (
            <div key={taskObj.id} style={style.task}>
              <p>{taskObj.task}</p>
              <button style={style.addBtn}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

const style = {
  root: {
    backgroundColor: "#f3f4f6",
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  control: {
    display: "flex",
    gap: "10px",
    width: "100%",
    maxWidth: "500px",
    marginBottom: "25px",
  },
  input: {
    flex: 1,
    padding: "12px 15px",
    fontSize: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#ffffff",
  },
  addBtn: {
    padding: "12px 25px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
  taskContainer: {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "12px 16px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e5e7eb",
  },
};
