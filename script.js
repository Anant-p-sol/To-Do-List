let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
    {
        text: "Learn HTML",
        uniqueNo : 1
    },
    {
        text: "learn CSS",
        uniqueNo : 2
    },
    {
        text: "learn Javascript",
        uniqueNo : 3
    },
    {
        text: "learn Bootstrap",
        uniqueNo : 4
    }
]

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;


    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    todoElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
}

for(let Todo of todoList){
    createAndAppendTodo(Todo);
}