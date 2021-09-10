'use strict'

document.querySelector('.b-1').addEventListener('click', () => {
	let data = document.querySelector('.i-1').value;
	if(data !== '') {
		document.querySelector('.out-1').innerHTML += data;
	}
	document.querySelector('.i-1').value = 123;
});

document.querySelector('.b-2').addEventListener('click', () => {
	let data = +document.querySelector('.i-2').value;
	document.querySelector('.out-2').innerHTML = Number(document.querySelector('.out-2').innerHTML) + data;
});

document.querySelector('.b-3').addEventListener('click', () => {
	let data = document.querySelector('.i-3').value;
	document.querySelector('.out-3').innerHTML = data;
	document.querySelector('.out-3').style.color = data;
});

document.querySelector('.b-4').addEventListener('click', () => {
	let data = document.querySelector('.i-4').value;
	document.querySelector('.out-4').innerHTML = data;
});

// document.querySelector('.b-5').addEventListener('click', () => {
// 	let data = document.querySelector('.i-5').value;
// 	document.querySelector('.out-5').innerHTML = data;
// });
document.querySelector('.i-5').addEventListener('input', () => {
	let data = document.querySelector('.i-5').value;
	document.querySelector('.out-5').innerHTML = data;
});

document.querySelector('.b-6').addEventListener('click', () => {
	// let data = document.querySelector('.i-6').value;
	// if (document.querySelector('.i-6').checked) {
	// 	document.querySelector('.out-6').innerHTML = data;
	// } else {
	// 	document.querySelector('.out-6').innerHTML = '';
	// }

	
	if (!document.querySelector('.i-6').checked) {
		document.querySelector('.i-6').checked = true;
	} else {
	document.querySelector('.i-6').checked = false;
	}
});

document.querySelector('.b-7').addEventListener('click', () => {
	// let data = document.querySelector('.i-7').value; !!!
	let  radio = document.querySelectorAll('.i-7');
	radio.forEach(i => {
		if(i.checked){
			document.querySelector('.out-7').innerHTML = i.value;
		}
	});
});

document.querySelector('.b-8').addEventListener('click', () => {
	let data = document.querySelector('.i-8').value;
	document.querySelector('.out-8').innerHTML = data;
});

document.querySelector('.b-9').addEventListener('click', () => {
	let data = document.querySelector('.i-9').value;
	document.querySelector('.out-9').innerHTML = data;
});

document.querySelector('.b-10').addEventListener('click', () => {
	let section = document.querySelector('.s-10').value;
	document.querySelector('.out-10').innerHTML = section;

	// document.querySelector('.s-10').value = 'winamp';
});

document.querySelector('.b-11').addEventListener('click', () => {
	let section = document.querySelector('.t-11').value;
	document.querySelector('.out-11').innerHTML = section;
});

document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const form = document.querySelector('form');
	console.dir(form.elements.mySelect.value);

	form.reset(); //очистить форму
});