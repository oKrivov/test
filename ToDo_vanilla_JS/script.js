'use strict'

let addMessage = document.querySelector('.input_task');
let todoList = [];
let todo = document.querySelector('.container_new_task');

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMassages();
}

addMessage.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        if (!addMessage.value) return;
        let newTodo = {
            todo: addMessage.value,
            checked: false,
            important: false,
        }
        todoList.push(newTodo)
        addMessage.value = '';
        displayMassages();
        localStorage.setItem('todo', JSON.stringify(todoList));
    }
});

function displayMassages() {
    let displayMassage = '';
    todoList.forEach(function (item, i) {
        displayMassage += `
            <div class="new_task">
                <label class="label" for="item_${i}">
                    <input type="checkbox" class="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
                    <span class="fake-checkbox"></span>
                </label>
                <div class="task_container">
                    <span class="label_text item_${i}">${item.todo}</span>
                    <a type="button" class="my-btn-close" aria-label="Close"></a>
                </div>
            </div>
         `;
        todo.innerHTML = displayMassage;
    })
}


todo.addEventListener('change', function (event) {
    let idInput = (event.target.getAttribute('id'));
    let for_label_text = todo.querySelector(`.${idInput}`);
    let value_label_text = for_label_text.innerHTML;

    todoList.forEach(function (item) {

        if (item.todo === value_label_text) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
});


