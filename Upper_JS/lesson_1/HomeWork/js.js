//Класс Menu
function Menu(myId, myClass, myItems) {
	this.id = myId;
	this.className = myClass;
	this.items = myItems;
}


Menu.prototype.render = function () {
	var result5 = '<ul class="' + this.className + '" id="' + this.id + '">';

	for (var i = 0; i < this.items.length; i++) {
		if (this.items[i] instanceof MenuItem) {
			result5 += this.items[i].renderItem(); //result5 = result5 + this.items[i].renderItem();
		}
	}

	result5 += '</ul>';
	return result5;
};

/*
1. Улучшить базовый класс, добавив в него общий для всех метод remove(), который удаляет контейнер.
*/
Menu.prototype.remove = function () {
	var elem = document.getElementById(this.id);
	elem.parentNode.removeChild(elem);
};

//Класс для пункта меню
function MenuItem(href, title, myId, myClass, myItems) {
	Menu.call(myId, myClass, myItems);
	this.href = href;
	this.title = title;
}

MenuItem.prototype = Object.create(Menu.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.renderItem = function () {
	var result6 = '<li><a href="' + this.href + '">' + this.title + '</a>';
	result6 += '<ul class="' + this.className + '" id="' + this.id + '">';

	for (var i = 0; i < this.items.length; i++) {
		if (this.items[i] instanceof MenuItem) {
			result6 += this.items[i].renderItem();
		}
	}

	result6 += '</ul>';
	result6 += '</li>';
	return result6;
};

window.onload = function () {

	var menuMain = new Menu('my1', 'my1', [
		new MenuItem('/', 'Home', 'my', 'my', 'my'),
		new MenuItem('/about', 'О нас', 'my', 'my',
			[new MenuItem('/about/history', 'История', 'my1', 'my1', 'my1'), new MenuItem('/about/management', 'Компания в лицах', 'my1', 'my1', 'my1')]),
		new MenuItem('/service', 'Услуги', 'my', 'my', 'my'),
		new MenuItem('/blog', 'Блог', 'my', 'my', 'my'),
		new MenuItem('/contacts', 'Контакты', 'my', 'my', 'my'),
		//new Menu('34', '324', [])
	]);

	var menu1 = document.getElementById('menu1');
	console.log(menuMain.items[0]);
	console.log(document.getElementById('menu1'));
	menuMain.render();
	menu1.innerHTML = menuMain.render();

	window.onload = function () {menu1.remove();};
	menu1.remove();//Удаляет меню из DOM (со страницы)
	console.log(menuMain.render());
}