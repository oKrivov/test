'use strict'

//Selectors
let todoInput = document.querySelector('.input_todo');
let todo = document.querySelector('.container_new_task');




//Event Listeners
todoInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        if (!todoInput.value) return;
        let newTodo = {
            todo: todoInput.value,
            checked: false,
            important: false,
        }
        addTdo();
    }
});

//FUNCTIONS
function addTdo(e) {
    // TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('new_task');

    // Create checkbox
    const label = document.createElement('label');
    label.classList.add('label');
    todoDiv.appendChild(label);
    const checkBox = document.createElement('input');
    checkBox.innerHTML = `<input type="checkbox" class="checkbox" >
                          <span class="fake-checkbox"></span>`
    label.appendChild(checkBox);
    // const fakeCheckBox = document.createElement('span');
    // fakeCheckBox.classList.add('fake-checkbox');
    // label.appendChild(fakeCheckBox);

    // Create task
    const task_text_container = document.createElement('div');
    task_text_container.classList.add('task_container');
    todoDiv.appendChild(task_text_container);

    // Create taskText
    const taskText = document.createElement('span');
    taskText.innerText = todoInput.value;
    taskText.classList.add('label_text');
    task_text_container.appendChild(taskText);

    // Create Close-btn
    const closeButton = document.createElement('a');
    closeButton.classList.add('my-btn-close');
    task_text_container.appendChild(closeButton);
    // Append to todo
    todo.appendChild(todoDiv);

}