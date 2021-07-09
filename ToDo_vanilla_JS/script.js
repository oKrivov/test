/*
'use strict'


let addTodos = document.querySelector('.input_task');
let todoList = [];
let todo = document.querySelector('.container_new_task');
const clear_completed = document.querySelector('.clear_completed');
const completedTask = document.querySelector('.completed_task');
const activeTask = document.querySelector('.active_task');
const allTask = document.querySelector('.all_task');






if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayToDos();
}

addTodos.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        if (!addTodos.value) return;

        let newTodo = {
            todo: addTodos.value,
            checked: false,
            important: false,
            id: todoList.length,
        }
        todoList.push(newTodo)
        addTodos.value = '';
        displayToDos();
        localStorage.setItem('todo', JSON.stringify(todoList));

    }
});

function deleteOne(index) {
    todoList.splice(index, 1);
    displayToDos();
    localStorage.setItem('todo', JSON.stringify(todoList));
}

function displayToDos() {
    let displayMassage = '';
    if (todoList.length === 0) todo.innerHTML = ''
    todoList.forEach(function (item, i) {
        displayMassage += `
            <div class="new_task">
                <label class="label" for="item_${i}">
                    <input type="checkbox" class="checkbox" id="${item.id}" ${item.checked ? 'checked' : ''}>
                    <span class="fake-checkbox"></span>
                </label>
                <div class="task_container">
                    <span class="label_text ${item.checked ? 'check' : ''}">${item.todo}</span>
                    <a type="button" class="my-btn-close" onclick="deleteOne(${i})" aria-label="Close"></a>
                </div>
            </div>
         `;
        todo.innerHTML = displayMassage;
    })
}

// todo.addEventListener('change', function (event) {
//     let idInput = (event.target.getAttribute('id'));
//     let for_label_text = todo.querySelector(`.${idInput}`);
//     let value_label_text = for_label_text.innerHTML;
//
//     todoList.forEach(function (item) {
//         if (item.id === parseInt(idInput)) {
//             event.ta
//             // item.checked = !item.checked;
//             if (item.checked) {
//                 for_label_text.classList.add('check');
//             } else {
//                 for_label_text.classList.remove('check');
//             }
//
//         }
//     })
//     localStorage.setItem('todo', JSON.stringify(todoList));
//
// });


todo.addEventListener('change', function (event) {
    console.log(event.target)
})

clear_completed.addEventListener('click', function () {

    todoList.forEach(function (item,i) {

        if (item.checked){
            console.log(item.checked)
            deleteOne(i);
        }
    })
    localStorage.setItem('todo', JSON.stringify(todoList));
});



completedTask.addEventListener('click', function (e) {

    todoList.forEach(function (item, i) {
        // if (!item.checked){
        //     console.log(item.checked);
        //     todo.children[i].style.display = 'none'
        // } else {
        //     todo.children[i].style.display = 'flex'
        // }
        todo.children[i].style.display = item.checked ? 'flex' : 'none'
    })
})

activeTask.addEventListener('click', function (e) {

    todoList.forEach(function (item, i) {
        todo.children[i].style.display = item.checked ? 'none' : 'flex'
    })
})
allTask.addEventListener('click', function () {

    todoList.forEach(function (item, i) {
        todo.children[i].style.display = 'flex'
    })
})







todo.addEventListener('click',function (e) {

    let attribute = e.target.getAttribute('class')
    // console.log(attribute);
    if (attribute === 'my-btn-close') {
      // e.target.parentNode;
    }
})

 */























