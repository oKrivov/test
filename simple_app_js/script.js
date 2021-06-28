'use strict'

const block__list = document.querySelectorAll('.block__list');
const dropList = document.querySelector('.drop-list');
const dropList__li = document.querySelectorAll('.drop-list__li');
const currentText = document.querySelector('.block__current-text');
const button = document.querySelector('.button');
const inp =  document.querySelector('.input');
let target;

block__list.forEach(item => {
    item.addEventListener('click', function () {
        dropList.classList.toggle('_active')
        dropList.classList.add('checked')
    })
});

dropList__li.forEach( item => {
    item.addEventListener('click', selectChoose)
});

function selectChoose (e) {
    let text = this.innerText;
    currentText.innerText = text;
    target = e.target;
    inp.value = target.innerText;
    dropList.classList.remove('_active');
    inp.classList.remove('error')
    button.classList.remove('error')
}

button.addEventListener('click', function () {
    if ( inp.value.trim() === '') {
        inp.classList.add('error');
        button.classList.add('error');
    } else  {
        inp.classList.remove('error')
        button.classList.remove('error')
        currentText.innerText = inp.value;
        target.innerText =  inp.value;
    }
})

