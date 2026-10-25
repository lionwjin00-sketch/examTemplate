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
}); //사실상 모든걸 실행하는 함수. li에 textContent를 넣어주고, 삭제 버튼을 만들어서 li에 추가하고, 삭제 버튼 클릭시 confirm창을 띄우고, 확인시 todos에서 해당 index를 제거하고 showTodos()를 다시 실행함.

li.appendChild(deleteButton);
    todoList.appendChild(li);
    }
}//showTodos()를 실행하면, todoList의 innerHTML을 초기화하고, todos 배열을 순회하면서 li를 생성하고, 삭제 버튼을 만들어서 li에 추가하고, li를 todoList에 추가함.
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
});//버튼 클릭시, WhatTodo에 있는 value를 가져와서 todos에 push해주고, showTodos()를 실행해주고, WhatTodo.value를 초기화해줌