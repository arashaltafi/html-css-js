// selectors
const todoInput = document.querySelector(".todo-input");
const addTodoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");

// event listeners
addTodoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", checkRemove)
filterOption.addEventListener("click", filterTodos)
document.addEventListener("DOMContentLoaded", getLocalTodos)

// functions
function addTodo(e) {
    e.preventDefault();
    console.log(e);  

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = `
    <li>${todoInput.value}</li>
    <span><i class="far fa-trash-alt"></i></span>
    <span><i class="far fa-circle-check"></i></span>`;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    saveLocalTodos(todoInput.value);
    todoInput.value = "";
}

function checkRemove(e) {
     const classList = [...e.target.classList];
     const item = e.target;
     console.log(classList)

     if (classList[1] === "fa-trash-alt") {
        const todo = item.parentElement.parentElement;
        removeLocalTodos(todo)
        todo.remove()
     } else if (classList[1] === "fa-circle-check") {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed")
     }
}

function filterTodos(e) {
   const todos = [...todoList.childNodes];
   todos.forEach((item) => {
      console.log(item.classList)

      switch(e.target.value) {
         case "all":
            item.style.display = "flex";
            break;
         case "completed":
            if (item.classList.contains("completed")) {
               item.style.display = "flex";
            } else {
               item.style.display = "none";
            }
            break;
         case "uncompleted":
            if (item.classList.contains("completed")) {
               item.style.display = "none";
            } else {
               item.style.display = "flex";
            }
            break;
      }
   });
}

function saveLocalTodos(todo) {
   // localStorage.getItem('todos');
   // localStorage.setItem('todos', JSON.stringify(todo));

   let savedTodos = localStorage.getItem('todos') ? 
   JSON.parse(localStorage.getItem('todos')) : [];

   savedTodos.push(todo);
   localStorage.setItem('todos', JSON.stringify(savedTodos));
}

function getLocalTodos() {
   let savedTodos = localStorage.getItem('todos') ? 
   JSON.parse(localStorage.getItem('todos')) : [];
   savedTodos.forEach((item) => {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      const newTodo = `
      <li>${item}</li>
      <span><i class="far fa-trash-alt"></i></span>
      <span><i class="far fa-circle-check"></i></span>`;
      todoDiv.innerHTML = newTodo;
      todoList.appendChild(todoDiv);
   })
}

function removeLocalTodos(todo) {
   let savedTodos = localStorage.getItem('todos') ? 
   JSON.parse(localStorage.getItem('todos')) : [];

   const filteredTodos = savedTodos.filter((item) => {
      return item !== todo.children[0].innerText
   });

   localStorage.setItem('todos', JSON.stringify(filteredTodos))
}

function removeAll() {
   localStorage.removeItem('todos')
}