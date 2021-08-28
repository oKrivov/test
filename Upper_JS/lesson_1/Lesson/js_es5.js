// Функция конструктор, класс
// Класс первичен
// Шаблое, чертеж

function User(name, age) {
	this.name = name;
	this.age = age;
	this.space = 0;
};

User.prototype.showInfo = function () {
	console.log('Имя', this.name);
	console.log('Возраст', this.age);
};

// Наследование
function Developer (name, age, department, salary) {
	User.call(this, name, age)
	this.department = department;
	this.salary = salary;
};

Developer.prototype = Object.create(User.prototype);

// Создаем экзампляр класса User
var user1 = new User('Kate', 34);
console.log(user1);
console.log(user1.name, user1.age);
user1.showInfo();


console.log(['1']);

var user2 = new User('K', 4);
user2.showInfo();
console.log(user2);

var user3 = new Developer('Alex', 40, 'Frontend', 90000 );
Developer.prototype.constructor = Developer;
user3.showInfo()
console.log(user3);

