const addTaskBtn = document.querySelector("#add-task-btn");
const taskInput = document.querySelector("#task-input");

taskInput.onkeyup = (event) => {
  if (event.key === "Enter") {
    addTask();
  }
  // if (event.target.value !== "") {
  //   addTaskBtn.disabled;
  // }
};

const addTask = () => {
  if (taskInput.value === "") {
    alert("Please insert task");
    return;
  }

  const liElem = document.createElement("li");
  const spanElem = document.createElement("span");
  const deleteBtn = document.createElement("button");
  spanElem.innerText = taskInput.value;
  deleteBtn.innerText = "Delete";
  liElem.className = "my-1";
  deleteBtn.className = "btn btn-danger ms-1";

  liElem.appendChild(spanElem);
  liElem.appendChild(deleteBtn);
  document.body.appendChild(liElem);

  deleteBtn.onclick = () => {
    document.body.removeChild(liElem);
  };

  taskInput.value = "";
  addTaskBtn.disabled = true;
};

addTaskBtn.onclick = () => {
  addTask();
};
