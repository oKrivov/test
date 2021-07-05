
'use strict'

//Selectors
let todoInput = document.querySelector('.input_task');
let todoList = document.querySelector('.container_new_task');
const clear_completed = document.querySelector('.clear_completed');
const filterOption = document.querySelector('.info-buttons');
let itemleft = document.querySelector('.info-score_item');
let container_info = document.querySelector('.container_info');
const sortButton = document.querySelector('.toggleCheck');


//Event Listeners
todoInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        // console.log(e);
        if (!todoInput.value) return;

        container_info.style.display = 'block';
        addTdo(e);

    }
});

// todoList.addEventListener('click', toggleCheck);


sortButton.addEventListener('click', checkAll);


filterOption.addEventListener('click', filterTodo);
clear_completed.addEventListener('click', clearCompleted);


//FUNCTIONS

function checkUncheck(main, cn) {

    let cbarray = document.getElementsByClassName(cn);

    console.log(cbarray);
    for (let i = 0; i < cbarray.length; i++) {
        let item = cbarray[i]
        item.checked = main.checked
        console.log(item);
    }
};

let checkboxes = document.querySelectorAll("input [type = 'checkbox']");


function checkAll(myCheckbox) {
    console.log(checkboxes);
    // if(myCheckbox.checked == true) {
    // 	checkboxes.forEach(function(checkbox) {
    // 		checkbox.checked = true;
    // 	})
    // }
}










// Check mark
function toggleCheck(e) {
    const item = e.target;

    if (item.classList.contains('checkbox')) {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle('completed');
    }
    countActiveTodo ()
}

// Clear Competed
function clearCompleted() {
    let item = todoList.children;
    for (let i = item.length - 1; i >= 	0; --i) {
        if (item[i].classList.contains('completed')) {
            item[i].remove();
        }

    }
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
    labelCheckbox.name = 'checkbox';
    label.appendChild(labelCheckbox)
    const fake_checkbox = document.createElement("span");
    fake_checkbox.classList.add('fake-checkbox')
    label.appendChild(fake_checkbox)

    // label.innerHTML = `<input type="checkbox" class="checkbox" >
    //                  <span class="fake-checkbox"></span>`;
    labelCheckbox.addEventListener('change', toggleCheck)
    todoDiv.appendChild(label);

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

    // itemleft.innerText = todoList.children.length
    countActiveTodo ()
}



// Count item
function countActiveTodo() {
    let item = todoList.children;
    let count = item.length;
    for (let i = item.length - 1; i >= 	0; --i) {
        if (item[i].classList.contains('completed')) {
            count --;
        }
    }
    itemleft.innerText = count
}

// Delete todo
function deleteTodo(e) {
    const item = e.target;

    if (item.classList.contains('my-btn-close')) {
        const todo = item.parentElement;
        todo.remove();
    }
    countActiveTodo ()
}

// Filter
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