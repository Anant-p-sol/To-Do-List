let inputElement = document.createElement("input");
inputElement.id = "myCheckbox";
inputElement.type = "checkbox";
document.body.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for","myCheckbox");
labelElement.textContent = "Graduated";
document.body.appendChild(labelElement);
