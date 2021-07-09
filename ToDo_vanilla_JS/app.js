'use strict'

//Selectors

const toDo = document.querySelector('.todo_block')

let todoInput = document.querySelector('.input_task');
const clear_completed = document.querySelector('.clear_completed');
const filterOption = document.querySelector('.info-buttons');
const itemleft = document.querySelector('.info-score_item');
const container_info = document.querySelector('.container_info');
const toggleCheckbox = document.querySelector('.toggleCheck');
const imgToggleCheckbox = document.querySelector('.sort')
const todoListElement = document.querySelector('.container_new_task')

const todoList = new ToDoList(todoListElement);


//Event Listeners
todoInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {

        if (!todoInput.value.trim()) return;
// TODO clear input
        todoList.addTdo(todoInput.value);
        todoInput.value = '';
    }
    itemsNull()
});
filterOption.addEventListener('click',  function (e) {
    todoList.filterTodo(e);
} );
clear_completed.addEventListener('click',function (e) {
    todoList.clearCompleted(e);
    itemsNull()
} );
toggleCheckbox.addEventListener('change',function (e) {
    todoList.checkUncheck(e);
} );

// toDo.addEventListener('change', function () {
//     itemsNull()
// });


function itemsNull() {
    console.log(todoListElement.children.length)
    if (todoListElement.children.length > 0) {
        container_info.style.display = 'block';
        imgToggleCheckbox.style.display = 'block';
    } else {
        container_info.style.display = 'none';
        imgToggleCheckbox.style.display = 'none';
    }
}


