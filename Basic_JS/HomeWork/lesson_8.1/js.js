'use strict';

(() => {
	const food = {

	};
	
	const game = {
		food,
	
		init() {
			alert('Запуск игры.');
			//...
		},
	};
	
	window.snakeGame = {
		init(settings) {
			game.init(this.settings)
		}
	};
})();

snakeGame.settings = {speed: 5};
snakeGame.init({speed: 5,});