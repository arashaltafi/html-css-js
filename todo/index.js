// selectors
const todoInput = document.querySelector(".todo-input");
const addTodoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");

// event listeners
addTodoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", checkRemove)


// functions
function addTodo(e) {
    e.preventDefault();
    console.log(e);  

    const todoDiv = document.querySelector("div");
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
        alert("check")
     }
}

function remove1() {

}