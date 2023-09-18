// selectors
const todoInput = document.querySelector(".todo-input");
const addTodoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");

// event listeners
addTodoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", checkRemove)
filterOption.addEventListener("click", filterTodos)

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

    todoInput.value = "";
}

function checkRemove(e) {
     const classList = [...e.target.classList];
     const item = e.target;
     console.log(classList)

     if (classList[1] === "fa-trash-alt") {
        const todo = item.parentElement.parentElement;
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