'use strict'

let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next-btn').addEventListener('click', () => {
	offset += 256;
	if (offset > 768) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev-btn').addEventListener('click', () => {
	offset -= 256;
	if (offset < 0) {
		offset = 768;
	}
	sliderLine.style.left = -offset + 'px';
})