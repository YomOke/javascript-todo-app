// Todo list Application

// Globals
let todoList = [];
let serialNumber = 0;
let index = null;

// DOM elements
const createForm = document.querySelector("#create-form");
const formContainerTwo = document.querySelector(".form-container-2");
const editForm = document.querySelector("#edit-form");
const tbody = document.getElementsByTagName("tbody")[0];

// create todo form
createForm.onsubmit = function (e) {
  e.preventDefault();
  // console.log(e);

  // console.log(e.target.date.value);
  // console.log(e.target.title.value);
  //   console.log("sumitted");

  serialNumber = serialNumber + 1;
  const todo = {
    sn: serialNumber,
    createdOn: new Date().toDateString(),
    title: e.target.title.value,
    todoDate: new Date(e.target.date.value).toDateString(),
  };

  todoList.push(todo);
  //   console.log(todoList);

  // empty table body
  tbody.innerHTML = "";
  createTodo(todoList);
};

// edit todo form
editForm.onsubmit = function (e) {
  e.preventDefault();

  todoList[index].title = e.target.title.value;
  todoList[index].todoDate = new Date(e.target.date.value).toDateString();

  tbody.innerHTML = "";
  createTodo(todoList);

  formContainerTwo.style.visibility = "hidden";
  formContainerTwo.style.opacity = 0;
};

// delete todo handler
function handleDelete(sn) {
  //   console.log(sn);

  todoList = todoList.filter((item) => item.sn !== sn);

  // make table body empty
  tbody.innerHTML = "";
  createTodo(todoList);
}

// edit todo handler
function handleEdit(sn) {
  todo = todoList.filter((item) => item.sn == sn)[0];

  index = todoList.indexOf(todo); // get todo index;
  //   console.log(index);

  document.getElementById("title-edit").value = todo.title;
  let date = new Date(todo.todoDate);

  //   console.log(date.getFullYear());
  //   console.log(date.getMonth());
  //   console.log(date.getDate());

  let month = date.getMonth() + 1;
  let day = date.getDate();

  // concat 0 if month and day is less than 10
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  // make date a suitable format for html "(year-mm-dd)"
  date = `${date.getFullYear()}-${month}-${day}`;
  //   console.log(date);

  document.getElementById("date-edit").value = date;

  formContainerTwo.style.visibility = "visible";
  formContainerTwo.style.opacity = 1;
}

// create todo
function createTodo(list) {
  // loop through todo list and create table row for each todos
  // then append each row inside table body
  list.forEach((item, i) => {
    let tr = document.createElement("tr");

    let sn = document.createElement("td");
    let createdOn = document.createElement("td");
    let title = document.createElement("td");
    let todoDate = document.createElement("td");

    let edit = document.createElement("td");
    let del = document.createElement("td");

    let editButton = document.createElement("button");
    editButton.setAttribute("id", "edit");
    editButton.setAttribute("onclick", `handleEdit(${item.sn})`);

    // <button id="edit" onclick="handleEdit(sn)"></button>

    editButton.textContent = "Edit";
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete");
    deleteButton.setAttribute("onclick", `handleDelete(${item.sn})`);
    deleteButton.textContent = "Delete";

    sn.textContent = i + 1;
    createdOn.textContent = item.createdOn;
    title.textContent = item.title;
    todoDate.textContent = item.todoDate;
    edit.appendChild(editButton);
    del.appendChild(deleteButton);

    // console.log(item);

    tr.appendChild(sn);
    tr.appendChild(createdOn);
    tr.appendChild(title);
    tr.appendChild(todoDate);
    tr.appendChild(edit);
    tr.appendChild(del);

    tbody.appendChild(tr);
  });
}
