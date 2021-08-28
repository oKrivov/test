'use strict'

class BaseCar 
{
	constructor (model, color, year) {
		this.model = model;
		this.color = color;
		this.year = year;
	}

	buy () 
	{
		console.log('Автомобиль', this.model, this.year, 'куплен');
	}
}

class Car extends BaseCar
{
	constructor (model, color, year, bonus)
	{
		super(model, color, year);
		this.bonus = bonus;
	}

	buy() 
	{
		// Вызываеи метод buy из класса родителя
		super.buy();
		console.log('Скидка', this.bonus);
	}
}

let car1 = new BaseCar('Honda', 'Black', 2015);
console.log(car1);
car1.buy()

let car2 = new Car('Honda', 'Gray', 2014, '5%');
console.log(car2);
car2.buy();
