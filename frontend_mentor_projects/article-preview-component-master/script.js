'use strict'

const share = document.querySelector('.component-share');
const links = document.querySelector('.component-share-active');
share.addEventListener('click', () => links.classList.toggle('active-link'));