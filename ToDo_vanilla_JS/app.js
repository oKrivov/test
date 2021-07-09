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
    // itemsNull();
});
filterOption.addEventListener('click',  function (e) {
    todoList.filterTodo(e);
} );
clear_completed.addEventListener('click',function (e) {
    todoList.clearCompleted(e);
} );
toggleCheckbox.addEventListener('change',function (e) {
    todoList.checkUncheck(e);
} );


toDo.addEventListener('change', todoList.itemsNull);

// function itemsNull() {
//
//     if(todoListElement.children.length > 0) {
//         toDo.lastElementChild.style.display = 'block'
//     } else {
//         toDo.lastElementChild.style.display = 'none'
//     }
// }
// itemsNull() {
//     console.log(this.element.children)
//     if (this.element.children.length > 0) {
//         container_info.style.display = 'block';
//         imgToggleCheckbox.style.display = 'block';
//     } else {
//         container_info.style.display = 'none';
//         imgToggleCheckbox.style.display = 'none';
//     }
// }



// filterOption.addEventListener('click',  () => todoList.filterTodo());
// clear_completed.addEventListener('click', () => todoList.clearCompleted());
// toggleCheckbox.addEventListener('change', () => todoList.checkUncheck());


/*
//FUNCTIONS

// Todo Div
function addTdo(text) {
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
    checkMark();

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

    checkUncheck_mark.classList.toggle('sort_check', allChecked);
}

function toggleCheck(e)     {
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
// Toggle active class for buttons
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

// Filter todos
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

*/