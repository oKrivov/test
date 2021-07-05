'use strict'

//Selectors
let todoInput = document.querySelector('.input_task');
let todoList = document.querySelector('.container_new_task');
const clear_completed = document.querySelector('.clear_completed');
const filterOption = document.querySelector('.info-buttons');
let itemleft = document.querySelector('.info-score_item');
let container_info = document.querySelector('.container_info');
const toggleCheckbox = document.querySelector('.toggleCheck');
let currentFilter = 'all';

//Event Listeners
todoInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        // console.log(e);
        if (!todoInput.value.trim()) return;
        const todoList_Array = Array.from(todoList.children).map(child => child.textContent);
        if (todoList_Array.includes(todoInput.value)) {
            return;
        }

        // for (let item of todoList_Array) {
        //     if (item.textContent.includes(todoInput.value)){
        //        return;
        //     }
        // }

        container_info.style.display = 'block';
        addTdo(e);

    }
});
filterOption.addEventListener('click', filterTodo);
clear_completed.addEventListener('click', clearCompleted);
toggleCheckbox.addEventListener('change', checkUncheck)



//FUNCTIONS

// Todo Div
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
    countActiveTodo();
    filterTodos();

}




// Check and Uncheck All Todos
function checkUncheck(event) {
    const arrayOfCheckbox = todoList.getElementsByClassName('checkbox');

    for (let item of arrayOfCheckbox) {
        toggleTodo(item, event.target.checked)

    }

    checkMark()
    countActiveTodo()
};


// Hide filter
function itemsNull() {
    if (todoList.children.length > 0) {
        container_info.style.display = 'block'
    } else {
        container_info.style.display = 'none'
    }
}

// Check mark
function checkMark() {
    const arrayOfCheckbox = todoList.getElementsByClassName('checkbox');
    const allChecked = Array.from(arrayOfCheckbox).every(check => check.checked);
    const anyChecked = Array.from(arrayOfCheckbox).some(check => check.checked);
    toggleCheckbox.checked = allChecked;
    clear_completed.style.display = anyChecked ? 'block' : 'none';
    const checkUncheck_mark = document.querySelector('.sort');
    console.log(checkUncheck_mark)
    checkUncheck_mark.classList.toggle('sort_check', allChecked);
}

function toggleCheck(e) {
    checkMark()
    toggleTodo(e.target, e.target.checked)
    countActiveTodo();
}

function toggleTodo(checkbox, toggle = true) {
    const todo = checkbox.parentElement.parentElement;
    todo.classList.toggle('completed', toggle);

    checkbox.checked = toggle;

    countActiveTodo();
    filterTodos()
}

// Clear Competed
function clearCompleted() {
    for (let item of Array.from(todoList.children)) {
        if (item.classList.contains('completed')) {
            item.remove()
        }
    }
    checkMark();
    itemsNull();
}

// Count item
function countActiveTodo() {
    let item = todoList.children;
    let count = item.length;
    for (let i = item.length - 1; i >= 0; --i) {
        if (item[i].classList.contains('completed')) {
            count--;
        }
    }
    itemleft.innerText = count;
}

// Delete todo
function deleteTodo(e) {
    const item = e.target;

    if (item.classList.contains('my-btn-close')) {
        const todo = item.parentElement;
        todo.remove();
    }
    checkMark();
    countActiveTodo()
    itemsNull();
}


// Filter
function filterTodo(e) {

    // const todos = todoList.children;
    const act_btn = e.target;
    const buttons = e.target.parentElement.children;
    currentFilter = act_btn.innerText.toLowerCase();
    for (let i = buttons.length - 1; i >= 0; --i) {
        if (buttons[i] === act_btn) {
            buttons[i].classList.add('active-btn')
        } else {
            buttons[i].classList.remove('active-btn')
        }
    }


    filterTodos()
}


function filterTodos() {
    const todos = todoList.children;
    for (const todo of todos) {
        switch (currentFilter) {
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