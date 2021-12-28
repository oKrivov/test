const startBtn =document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
	event.preventDefault();
	screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
	if(event.target.classList.contains('time-btn')){
		time = parseInt(event.target.getAttribute('data-time'));
		screens[1].classList.add('up')
		startGame();
		console.log(time)
	}
});

board.addEventListener('click', event => {
	if(event.target.classList.contains('circle')){
		score++;
		event.target.remove();
		createRandomCircle();
	}
});

function startGame() {
	setInterval(decreaseTime, 1000)
	setTime(time);
	createRandomCircle();
};

function decreaseTime(){
	if(time ===0){
		finishGame()
	} else{
		let current = --time;
		if(current < 10){
			current = `0${current}`;
		};
		setTime(current);
	}
	
};

function setTime(value) {
	timeEl.innerHTML = `00:${value}`
};

function finishGame(){
	timeEl.parentNode.classList.add('hide');
	board.innerHTML = `<h1>Ваш счет: <span class='primary'>${score}</span></h1>`
};

function createRandomCircle(){
	const circle = document.createElement('div');
	const size = getRamnomNumber(10,60);
	const {width, height} = board.getBoundingClientRect();
	const x = getRamnomNumber(0, width - size);
	const y = getRamnomNumber(0, height - size);

	circle.style.background = `${myRandomColor()}`
	circle.style.top = `${y}px`
	circle.style.left = `${x}px`
	circle.classList.add('circle');
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;

	board.append(circle);
};
function getRamnomNumber(min, max){
	return Math.round(Math.random() * (max - min) + min);
};

function myRandomColor(){
	const color = ['rgb(', ];
	const number = []
	for(let i = 0; i < 3; i++){
		number.push(Math.floor(Math.random() * 255))
	}
	color.push(number.join())
	color.push(')')
	return color.join('');
}