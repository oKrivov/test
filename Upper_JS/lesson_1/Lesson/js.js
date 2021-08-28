var user = {
	name: 'Anna',
	email: '1@2.ru',
	space: 0,
	go: function (h) {
		this.space +=h
		console.log(this.name);
		console.log('Пользователь прошел', h, 'м.', 'всего пройдено:', this.space);
	},
};

function showInfo(param1, param2) {
	// 'use strict'
	console.log(this);
	console.log(`Имя пользователя: ${this.name}`);
	console.log(`E-Mail: ${this.email}`);
	console.log(param1, param2);
};

// showInfo();

//Call/apply
showInfo.call(user, 'One', 'Two');
showInfo.call(user, 'call', 'Two');
showInfo.apply(user, ['apply', 'Two']);
showInfo.apply(user, ['apply']);

//Bind

var showInfoByUser = showInfo.bind(user);
showInfoByUser('Bind1', 'Two');
showInfoByUser('Bind2', 'Two');
showInfoByUser('Bind3', 'Two');





// console.log(user);
// console.log(user.name);
// user.go(500);
// user.go(700);
// user.go(900);
