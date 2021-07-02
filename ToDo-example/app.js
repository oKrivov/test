'use strict'

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
    console.log(event)
    //Prevent form submitting
    event.preventDefault();
    console.log(event)
    //   Todo Div
    if (todoInput.length === 0) {
        todoList.innerHTML = ''
    } else{

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = `<i class='fas fa-check'></i>`;
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //Check trash	 button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class='fas fa-trash'></i>`;
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv)
    // Clear Todo Input value
    todoInput.value = '';
    }
}

function deleteCheck(e) {
    const item = e.target;
    // Delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    // Check mark
    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function filterTodo(e) {
    const todos = todoList.children;

    for (const todo of todos) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                todo.style.display = todo.classList.contains('completed') ? 'flex' : 'none';
                break;
            case 'uncompleted':
                todo.style.display = !todo.classList.contains('completed') ? 'flex' : 'none';
                break;
        }
    }
}
