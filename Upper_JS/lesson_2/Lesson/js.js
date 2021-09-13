var userJson = '{\n' +
	'	"name": "Anna",\n' +
	'	"age": 27,\n' +
	'	"isMale": false\n'+
	'}';

var user = JSON.parse(userJson);
console.log(userJson);
console.log(user);
console.log(user.name, user.age, user.isMale);

user.friends = [
	'Alex',
	'Olga',
	'Nikita',
];
user.address = {
	postCode: '000111', 
}

console.log(user.address);

// var jsonFromUser = JSON.stringify(user, ['name', 'age'], 4);  
var jsonFromUser = JSON.stringify(user, null, 4);

console.log(jsonFromUser);


// AJAX

//Синхронный запрос
console.log('--sync--');
var xhr = new XMLHttpRequest();
xhr.open('GET', './json.json', false); // Синхронный запрос
xhr.send();

if (xhr.status !== 200) {
	console.log('Error!', xhr.status, xhr.statusText);
} else {
	var data = xhr.responseText;
	console.log('ok', data);
	var myTel = JSON.parse(data);
	console.log(myTel);
	console.log(myTel.name);
}


//Асинхронный запрос
console.log('--async--');


window.onload = function () {

	var user = document.getElementById('user');
	var btn1 = document.getElementById('btn-1');
	btn1.addEventListener('click', function () {
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', './json.json', true); // Асинхронный запрос

		xhr.onreadystatechange = function () {
			console.log(xhr.readyState);
			// 0 - запрос не инициализирован
			// 1 - загрузка
			// 2 - запрос принят сервером
			// 3 - обмен данными
			// 4 - запрос выполнен

			if (xhr.readyState !== 4) {
				return; // Выходим, если запрос еще выполняется
			}

			if (xhr.status !== 200) {
				console.log('Error!', xhr.status, xhr.statusText);
			} else {
				var data = xhr.responseText;
				console.log('ok', data);
				var myTel = JSON.parse(data);
				console.log(myTel);
				console.log(myTel.name);

				var nameEl = document.createElement('div');
				nameEl.textContent = 'Имя: ' + myTel.name;
				var ageEl = document.createElement('div');
				ageEl.textContent = 'Возраст: ' + myTel.age + 'лет';
				user.appendChild(nameEl);
				user.appendChild(ageEl);
			}
		};

		xhr.send(); // Отправка самого запроса
	})
}