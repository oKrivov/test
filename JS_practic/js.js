function func1() {
	var checkbox = document.getElementById('one');

	if (checkbox.checked) {
		console.log('Выбран');
	} else {
		console.log('Не выбрвн');
	}
}

function func2() {
	var radio = document.getElementsByName('r1');
	for (let index = 0; index < radio.length; index++) {
		if (radio[index].checked) {
			console.log('Выбран '+ index + ' элемент');
		}
	}
}
//========================================================================================================================================================

function func3 (){
	var sel = document.getElementById('mySelect').selectedIndex;
	var options = document.getElementById('mySelect').options;
	console.log('Выбрана опция ' + options[sel].text);
}