
'use strict'

//Selectors
let todoInput = document.querySelector('.input_task');
let todoList = document.querySelector('.container_new_task');
const clear_completed = document.querySelector('.clear_completed');
const filterOption = document.querySelector('.info-buttons');



//Event Listeners
todoInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        // console.log(e);
        if (!todoInput.value) return;
        addTdo(e);
    }
});
// todoList.addEventListener('click', toggleCheck);
filterOption.addEventListener('click', filterTodo);
clear_completed.addEventListener('click', clearCompleted);


//FUNCTIONS
function clearCompleted() {
    console.log(todoList.children)
    console.log(todoList.children)
    for (let item of todoList.children){
        if (item.classList.contains('completed')){
            console.log(item);
            item.remove();
        }
    }
    // todoList.childNodes.forEach(function (item) {
    //     if (item.classList.contains('completed')){
    //         console.log(item);
    //         item.remove();
    //     }
    // })
}

function addTdo(e) {
    // TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('new_task');

    // Create checkbox
    const label = document.createElement('label');
    label.classList.add('label');
    const labelCheckbox = document.createElement("input");
    labelCheckbox.classList.add('checkbox')
    labelCheckbox.type = 'checkbox';
    label.appendChild(labelCheckbox)
    const fake_checkbox = document.createElement("span");
    fake_checkbox.classList.add('fake-checkbox')
    label.appendChild(fake_checkbox)

    // label.innerHTML = `<input type="checkbox" class="checkbox" >
	//                  <span class="fake-checkbox"></span>`;
    labelCheckbox.addEventListener('change', toggleCheck)
    todoDiv.appendChild(label);

    // Create task
    // const task_text_container = document.createElement('div');
    // task_text_container.classList.add('task_container');
    // todoDiv.appendChild(task_text_container);

    // Create taskText
    const taskText = document.createElement('span');
    taskText.innerText = todoInput.value;
    taskText.classList.add('label_text');
    label.appendChild(taskText);

    // Create Close-btn
    const closeButton = document.createElement('a');
    closeButton.classList.add('my-btn-close');
    closeButton.addEventListener('click', deleteTodo);
    todoDiv.appendChild(closeButton);

    // Append to todo
    todoList.appendChild(todoDiv);

    // Clear todoInput
    todoInput.value = '';

}

function toggleCheck(e) {
    const item = e.target;
    // Check mark
    if (item.classList.contains('checkbox')) {
        const todo = item.parentElement.parentElement;
        // console.log(todo)
        todo.classList.toggle('completed');
    }

}

function deleteTodo(e) {
    const item = e.target;
    // Delete todo
    if (item.classList.contains('my-btn-close')) {
        const todo = item.parentElement;
        todo.remove();

    }
}

function filterTodo(e) {

    const todos = todoList.children;

    for (const todo of todos) {

        switch (e.target.innerText.toLowerCase()) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                todo.style.display = todo.classList.contains('completed') ? 'flex' : 'none';
                break;
            case 'active':
                todo.style.display = !todo.classList.contains('completed') ? 'flex' : 'none';
                break;
        }
    }
}


