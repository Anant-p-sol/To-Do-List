let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

let todosCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkboxInput" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    inputElement.classList.add("checkbox-input");
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.id = labelId;
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);

}
for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onAddTodo() {
    let userInputTodo = document.getElementById("todoUserInput");
    let userInputTodoValue = userInputTodo.value;
    if (userInputTodoValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;
    let newTodo = {
        text: userInputTodoValue,
        uniqueNo: todosCount
    };

    createAndAppendTodo(newTodo);
    userInputTodo.value = "";

}

addTodoButton.onclick = function() {
    onAddTodo();
};