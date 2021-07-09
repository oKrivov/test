'use strict'


class ToDoList {

    constructor(element) {
        this.element = element;
    }
    currentFilter = 'all';


// Todo Div
    addTdo(text) {

        const todoList_Array = Array.from(this.element.children).map(child => child.innerText);
        if (todoList_Array.includes(text)) {
            return;
        }

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
        labelCheckbox.addEventListener('change', (e) => this.toggleCheck(e))
        todoDiv.appendChild(label);

        // Create taskText
        const taskText = document.createElement('span');
        taskText.innerText = text;
        taskText.classList.add('label_text');
        label.appendChild(taskText);

        // Create Close-btn
        const closeButton = document.createElement('a');
        closeButton.classList.add('my-btn-close');
        closeButton.addEventListener('click', (e) => this.deleteTodo(e));
        todoDiv.appendChild(closeButton);

        // Append to todo
        this.element.appendChild(todoDiv);

        // // Clear todoInput
        //

        this.countActiveTodo();
        this.filterTodos();
        this.checkMark();
        // this.itemsNull();
    }


    // Check and Uncheck All Todos
    checkUncheck(e) {
        const arrayOfCheckbox = this.element.getElementsByClassName('checkbox');

        for (let item of arrayOfCheckbox) {
            this.toggleTodo(item, e.target.checked);
        }
        this.checkMark();
        this.countActiveTodo();
    };


    toggleCheck(e) {
        this.checkMark();
        this.toggleTodo(e.target, e.target.checked);
        this.countActiveTodo();
    }

    // Check mark
    checkMark() {
        const arrayOfCheckbox = this.element.getElementsByClassName('checkbox');
        let allChecked = Array.from(arrayOfCheckbox).every(check => check.checked);
        // console.log(allChecked)
        const anyChecked = Array.from(arrayOfCheckbox).some(check => check.checked);
        toggleCheckbox.checked = allChecked;
        clear_completed.style.display = anyChecked ? 'block' : 'none';
        const checkUncheck_mark = document.querySelector('.sort');
        checkUncheck_mark.classList.toggle('sort_check', allChecked);
    }

    toggleTodo(checkbox, toggle = true) {
        const todo = checkbox.parentElement.parentElement;
        todo.classList.toggle('completed', toggle);
        checkbox.checked = toggle;
        this.countActiveTodo();
        this.filterTodos();
    }

    // Clear Competed
    clearCompleted() {
        Array.from(this.element.children)
            .filter(item => item.classList.contains('completed'))
            .forEach(item => item.remove())

        this.checkMark();

    }

    // Count item
    countActiveTodo() {
        itemleft.innerText = Array.from(this.element.children)
            .filter(item => !item.classList.contains('completed')).length;
    }

    // Delete todo
    deleteTodo(e) {
        const item = e.target;

        if (item.classList.contains('my-btn-close')) {
            const todo = item.parentElement;
            todo.remove();
        }
        this.checkMark();
        this.countActiveTodo();
        // this.itemsNull();
        itemsNull()
    }

    // Filter
    // Toggle active class for buttons
    filterTodo(e) {
        const act_btn = e.target;
        const buttons = e.target.parentElement.children;
        this.currentFilter = act_btn.innerText.toLowerCase();
        for (let i = buttons.length - 1; i >= 0; --i) {
            if (buttons[i] === act_btn) {
                buttons[i].classList.add('active-btn');
            } else {
                buttons[i].classList.remove('active-btn');
            }
        }
        this.filterTodos();
    }

    // Filter todos
    filterTodos() {
        const todos = this.element.children;
        for (const todo of todos) {
            switch (this.currentFilter) {
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
}