'use strict'
/*
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
});

*/
const images = document.querySelectorAll('.slider .slider-line img');
console.log(images);
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
	console.log('resize');
	width = document.querySelector('.slider').offsetWidth;
	sliderLine.style.width = width * images.length + 'px';
	images.forEach(item => {
		item.style.width = width +'px';
		item.style.height = 'auto'
	})
	rollSlider();
};

window.addEventListener('resize', init);
init();

document.querySelector('.next-btn').addEventListener('click', () => {
	count++;
	rollSlider();
	if (count >= images.length - 1) {
		count = 0;
	}
});

document.querySelector('.prev-btn').addEventListener('click', () => {
	count--;
	rollSlider();
	if (count < 0) {
		count = images.length -1;
	}
});


function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
	
}