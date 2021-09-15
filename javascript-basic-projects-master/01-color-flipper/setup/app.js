const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
	let randomNumber = getRamdomNumdor();
	document.body.style.background = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRamdomNumdor() {
	return Math.floor(Math.random() * colors.length);
}