const WhatTodo = document.querySelector("#WhatTodo");
const addbutton = document.querySelector("#addbutton");
const todoList = document.querySelector("#todoList");

let todos = [
    {
        id: 1,
        text: "JavaScript 공부",
        completed: false
    },
    {
        id: 2,
        text: "운동하기",
        completed: true
    }
];

function showTodos() {
    todoList.innerHTML = "";
    
    for (let i = 0; i < todos.length; i++) {
       const li = document.createElement("li");
    li.textContent = todos[i].text;
    todoList.appendChild(li);
    }
}
showTodos();

addbutton.addEventListener("click", function () {
    const text = WhatTodo.value;

    todos.push({
        id: todos.length + 1,
        text: text,
        completed: false
    });

    showTodos();
    WhatTodo.value = "";
});
