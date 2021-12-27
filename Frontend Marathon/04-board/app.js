const board = document.querySelector('#board');
// const colors = ['red', 'blue', 'yellow', 'pink', 'purple'];
const SQUARES_NAUMBER = 400;

for(let i = 0; i < SQUARES_NAUMBER; i++){
	const square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover', (e) => {
		setColor(square);
	})
	square.addEventListener('mouseleave', (e) => {
		removeColor(square);
	});

	board.append(square);
};
function setColor(elem){
	// const color = getRandomColor();
	const color = myRandomColor();
	elem.style.background = color;
	elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};
function removeColor(elem){
	elem.style.background = '#1d1d1d';
	elem.style.boxShadow = `0 0 2px #000`
};
function getRandomColor(){
	const index = Math.floor(Math.random() * colors.length);
	return 	colors[index];
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