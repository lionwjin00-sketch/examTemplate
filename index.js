const WhatTodo = document.querySelector("#WhatTodo");
const addbutton = document.querySelector("#addbutton");
const todoList = document.querySelector("#todoList");
//html에 있는거 받아온거임

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
]; //초기 세팅

function showTodos() {
    todoList.innerHTML = ""; 
    
    for (let i = 0; i < todos.length; i++) {
       const li = document.createElement("li");
    li.textContent = todos[i].text;
    const deleteButton = document.createElement("button");
deleteButton.textContent = "삭제";

deleteButton.addEventListener("click", function () {
    if (confirm("정말 지우시겠습니까?")) {
        todos.splice(i, 1);
        showTodos();
    }
});

li.appendChild(deleteButton);
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