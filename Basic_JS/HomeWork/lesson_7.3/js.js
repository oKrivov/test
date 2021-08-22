'use strict'

/**
 * Объект змейки
 * @property {{x: int, y: int}[]} body Массив с точками тела змейки.
 * @property {string} lastStepDirection Направление , куда сходила змейка в прошлый раз.
 * @property {string} direction Направление, куда пользователь направил змейку.
 * @property {int} maxX Максимальное значение змейки по координате X.
 * @property {int} maxY Максимальное значение змейки по координате Y.
 */
const snake = {
	body: null,
	lastStepDirection: null,
	direction: null,
	maxX:  null,
	maxY: null,

	/**
	 * Иницивлизирует змейку, откуда она будет начинать и ее направление.
	 * @property {{x: int, y: int}[]} startPoint Точка начальной позиции змейки.
	 * @property {string} direction Начальное направление игрока.
	 * @property {int} maxX Максимальное значение змейки по координате X.
	 * @property {int} maxY Максимальное значение змейки по координате Y.
	 */
	init(startPoint, direction, maxX, maxY) {
		this.body = [startPoint];
		this.lastStepDirection = direction;
		this.direction = direction;
		this.maxX = maxX;
		this.maxY = maxY;
	},

	/**
	 * Отдает точку, где будет голова змейки.
	 * @returns {{x: int, y: int}} Следующая точка куда придет змейка сделав шаг.
	 */
	getNextStepHeadPoint() {
		const firstPoint = this.body[0];

		switch (this.direction) {
			case 'up':
			return {x: firstPoint.x, y: firstPoint.y  === 0 ? this.maxY :  firstPoint.y - 1};
			case 'down':
				return {x: firstPoint.x, y: firstPoint.y === this.maxY ? 0 : firstPoint.y  + 1};
			case 'right':
				return {x: firstPoint.x === this.maxX ? 0 : firstPoint.x + 1, y: firstPoint.y};
			case 'left':
				return {x: firstPoint.x === 0 ? this.maxX : firstPoint.x - 1, y: firstPoint.y};
		}
	},

	/**
	 * Проверяет содержит ли змейка переданнцю точку.
	 * @param point Точка, которую проверяем.
	 * @returns {boolean} true, если змейка содержит переданную точку, иначе false.
	 */
	isBodyPiont(point) {
		return this.body.some(snakePoint => snakePoint.x === point.x && snakePoint.y === point.y);
	},

	makeStep() {
		this.lastStepDirection = this.direction;
		this.body.unshift(this.getNextStepHeadPoint());
		this.body.pop();
	},

	setDirection(direction) {
		this.direction = direction;
	},

	incrementBody() {
		this.body.push(Object.assign({}, this.body[this.body.length - 1]));
	},

	getHeadPoint() {
		return Object.assign({}, this.body[0]);
	}
};

const food = {
	x: null,
	y: null,

	/**
	 * Возвращает точку еды
	 * @returns {{x: int, y: int}} 
	 */
	getCoordinates() {
		return {
			x: this.x,
			y: this.y,
		}
	},

	/**
	 * Устанавливает координаты еды.
	 * @param {{x: int, y: int}} point Точка еды.
	 */
	setCoordinates(point) {
		this.x = point.x;
		this.y = point.y;

	},
	isFoodPoint(point) {
		return this.x === point.x && this.y === point.y;
	},
};

/**
 * Счетчик игры пользователя.
 * @property {int} count Счет игры.
 * @property {HTMLEement} scoreCountEl Элемент счетчика.
 */
const score = {
	count: 0,
	scoreCountEl: document.getElementById('score-count'),

	/**
	 * Прибавляет единицу к счетчику.
	 */
	increment() {
		this.count++;
		this.scoreCountEl.textContent = this.count;
	},

	/**
	 * Сбрасывает счетчик.
	 */
	drop() {
		this.count = 0;
		this.scoreCountEl.textContent = this.count;
	},
};

/**
 * Объект с настройками по умолчанию, которые можно будет поменять при инициализации игры.
 * @property {int} rowsCount Количество строк.
 * @property {int} colsCount Количество колонок.
 * @property {int} speed Скорость змейки.
 * @property {int} winLength Длина змейки для победы.
 */
const settings = {
	rowsCount: 21,
	colsCount: 21,
	speed: 2,
	winLength: 50,

	/**
	 * Проверка значений настроек игры
	 * @returns {boolean} true, если настройки верны, иначе false.
	 */
	validate() {
		if (this.rowsCount < 10 ||  this.rowsCount > 30) {
			console.error('Неверные настройки игры. Значение rowsCount должно быть в диапазоне [10, 30]');
			return false;
		}

		if (this.colsCount < 10 ||  this.colsCount > 30) {
			console.error('Неверные настройки игры. Значение colsCount должно быть в диапазоне [10, 30]');
			return false;
		}

		if (this.speed < 1 ||  this.speed > 10) {
			console.error('Неверные настройки игры. Значение speed должно быть в диапазоне [1, 10]');
			return false;
		}

		if (this.winLength < 5 ||  this.winLength > 50) {
			console.error('Неверные настройки игры. Значение winLength должно быть в диапазоне [5, 50]');
			return false;
		}

		return true;
	},
};

const renderer = {
	cells: null,

	/**
	 * Метод инициализирут и выводит карту для игры
	 * @param {int} rowsCount Количество строк в карте.
	 * @param {int} colsCount Количество колонок в карте.
	 */
	rendermap(rowsCount, colsCount) {
		const table = document.getElementById('game');
		table.innerHTML = '';

		this.cells = {};

		for (let row = 0; row < rowsCount; row++) {
			const tr = document.createElement('tr');
			tr.classList.add('row');
			table.appendChild(tr);
			for (let col = 0; col < colsCount; col++) {
				const td = document.createElement('td');
				td.classList.add('cell');

				this.cells[`x${col}_y${row}`] = td;

				tr.appendChild(td)
			}
		}
	},

	/**
	 * Отображаем змейку и еду.
	 * @param {{x: int, y: int}[]} snakePointsArray 
	 * @param foodPoint 
	 */
	render(snakePointsArray, wallsPointsArray, foodPoint) {
		for (const key of Object.getOwnPropertyNames(this.cells)) {
			this.cells[key].className = 'cell';
		}

		snakePointsArray.forEach((point, idx) => {
			this.cells[`x${point.x}_y${point.y}`].classList.add(idx === 0 ? 'snakeHead' : 'snakeBody');
		});

		wallsPointsArray.forEach(point => {
			this.cells[`x${point.x}_y${point.y}`].classList.add('wall');
		}); 

		this.cells[`x${foodPoint.x}_y${foodPoint.y}`].classList.add('food');
	},
}; 


const status = {
	condition: null,

	setPlaying() {
		this.condition = 'playing';
	},

	setStopped() {
		this.condition = 'stopped';
	},

	setFinished() {
		this.condition = 'finished';
	},

	/**
	 * Проверяет является ли статус 'playing'.
	 * @returns {boolean} true, усли статус 'playing', иначе false.
	 */
	isPlaynig() {
		return this.condition === 'playing';
	},

	/**
	 * Проверяет является ли статус 'playing'.
	 * @returns {boolean} true, усли статус 'stopped', иначе false.
	 */
	isStopped() {
		return this.condition === 'stopped';
	},
	
	isFinished() {
		return this.condition === 'finished';
	}
};

const walls = {
	points: [],

	init(wallsPoints) {
		this.points = wallsPoints;
	},

	isWallPoint(point) {
		return this.points.some(wallPoint => wallPoint.x === point.x && wallPoint.y === point.y);
	},
	changeRandomWallPosition(point) {
		const wallIndex = Math.floor(Math.random() * this.points.length);
		this.points[wallIndex] = point;
	},
};

/**
 * Объект игры.
 * @property {settings} settings Настройка игры.
 * @property {renderer} renderer Объект отображения.
 * @property {snake} snake Объект змейки.
 * @property {food} food Объкт еды.
 * @property {status} status Статус игры.
 * @property {int} score Счетчик съеденой еды.
 * @property {int} tickInterval Номер интервала игры.
 */
const game = {
	settings,
	renderer, 
	walls,
	status,
	snake,
	food,
	score,
	tickInterval: null,
	changeWallTimeout: null,

	/**
	 * Инициализация игры.
	 * @param {object} [settings = {}] Настройки игры.
	 */
	init(settings = {}) {
		Object.assign(this.settings, settings);

		if(!this.settings.validate()){
			return;
		}
		
		this.renderer.rendermap(this.settings.rowsCount, this.settings.colsCount)

		this.setEvenrHandlers();

		this.reset();
	},

	setEvenrHandlers() {
		document.getElementById('playButton').addEventListener('click', () => this.playClickHandler());
		document.getElementById('newGameButton').addEventListener('click', () => this.newGameClickHandler());
		document.addEventListener('keydown', event => this.keyDownHandler(event));
	},

	playClickHandler() {
		if (this.status.isPlaynig()) {
			this.stop();
		} else if(this.status.isStopped()) {
			this.play();
		}
	},
	newGameClickHandler() {
		this.reset();
	},

	keyDownHandler(event) {
		if (!this.status.isPlaynig()) {
			return;
		}

		const direction = this.getDirectionByKeyCode(event.keyCode);

		if(this.canSetDirection(direction)) {
			this.snake.setDirection(direction);
		} 
	},

	canSetDirection(direction) {
		return direction === 'up' && this.snake.lastStepDirection !== 'down' ||
			direction === 'right' && this.snake.lastStepDirection !== 'left' ||
			direction === 'down' && this.snake.lastStepDirection !== 'up' ||
			direction === 'left' && this.snake.lastStepDirection !== 'right';
	},

	getDirectionByKeyCode(keyCode) {
		switch (keyCode) {
			case 38:
			case 87:
				return 'up';
			case 39:
			case 68:
				return 'right';
			case 40:
			case 83:
				return 'down';
			case 37:
			case 65:
				return 'left';
			default:
				return '';
		}
	},


	/**
	 * Ставит игру в начальное положение.
	 */
	reset() {
		this.stop();
		this.snake.init(this.getStartSnakePoint(), 'up', this.settings.colsCount - 1, this.settings.rowsCount - 1);
		this.score.drop();
		this.food.setCoordinates(this.getRandomCoordinates());
		this.walls.init(this.getRandomCoordinates(5, this.getDisabledWallCells()));
		this.render();
	},

	getDisabledWallCells() {
		const snakeHeadPoint = this.snake.getHeadPoint()

		const busyCells = [];
		
		for (let x = snakeHeadPoint.x - 2; x <= snakeHeadPoint.x + 2; x++) {
			for(let y = snakeHeadPoint.y - 2; y <= snakeHeadPoint.y +2; y++) {
				let xCoordinate = x, yCoordinate = y;

				if (xCoordinate < 0) {
					xCoordinate = this.settings.colsCount + xCoordinate;
				} else if (xCoordinate >= this.settings.colsCount) {
					xCoordinate = xCoordinate - this.settings.colsCount;
				}

				if (yCoordinate < 0) {
					yCoordinate = this.settings.rowsCount + yCoordinate;
				} else if (yCoordinate >= this.settings.rowsCount) {
					yCoordinate = yCoordinate - this.settings.rowsCount;
				}

				busyCells.push({x: xCoordinate, y: yCoordinate});
			}
		}
		return busyCells;
	},
	

	play() {
		this.status.setPlaying();
		this.tickInterval = setInterval(()=> this.tickHandler(), 1000 / this.settings.speed);
		this.changeWallTimeout = setTimeout(
			() => this.changeRandomWallPosition(), 
			Math.floor(Math.random() * 10000) + 5000
			);
		this.changePlayButton('Стоп');
	},

	changeRandomWallPosition() {
		this.changeWallTimeout = setTimeout(
			() => this.changeRandomWallPosition(), 
			Math.floor(Math.random() * 10000) + 5000
			);

			const newWallPosition = this.getRandomCoordinates(1, this.getDisabledWallCells());
			this.walls.changeRandomWallPosition(newWallPosition);
			this.render();
	},

	stop() {
		this.status.setStopped();
		clearInterval(this.tickInterval);
		clearTimeout(this.changeWallTimeout);
		this.changePlayButton('Старт');
	},
	
	finish() {
		this.status.setFinished();
		clearInterval(this.tickInterval);
		clearTimeout(this.changeWallTimeout);
		this.changePlayButton('Игра закончена', true);
	},

	/**
	 * Обработчик события тика игры, когда змейка должна перемещаться.
	 */
	tickHandler() {
		if (!this.canSnakeMakeStep()) {
			return this.finish();
		}

		if (this.food.isFoodPoint(this.snake.getNextStepHeadPoint())) {
			this.snake.incrementBody();
			this.score.increment();
			this.food.setCoordinates(this.getRandomCoordinates());
			if(this.isGameWon()) {
				console.log('Победа!');
				this.finish();
			}
		}

		this.snake.makeStep();

		this.render();
	},

	isGameWon() {
		return this.snake.body.length > this.settings.winLength;
	},

	canSnakeMakeStep() {
		const nextHeadPoint = this.snake.getNextStepHeadPoint();

		return !this.snake.isBodyPiont(nextHeadPoint) && !this.walls.isWallPoint(nextHeadPoint);
	},

	/**
	 * Меняет кнопку с классом playBatton.
	 * @param {string} textContent Текст кнопки.
	 * @param {boolean} [isDisable = false] Необъодимо ли заблокировать кнопку.
	 */
	changePlayButton(textContent, isDisable = false) {
		const playBatton = document.getElementById('playButton');
		playBatton.textContent = textContent;
		isDisable ? playBatton.classList.add('disabled') : playBatton.classList.remove('disabled');
	},

	render() {
		this.renderer.render(this.snake.body, this.walls.points, this.food.getCoordinates());
	},

	/**
	 * Возвращает начальную точку змайки.
	 * @returns {{x: int, y: int}} Точка змейки.
	 */
	getStartSnakePoint() {
		return {
			x: Math.floor(this.settings.colsCount / 2),
			y: Math.floor(this.settings.rowsCount / 2),
		}
	},

	/**
	 * Возвращает случайнкю не занятую точку на карте.
	 * @returns {{x: int, y: int}} Точка.
	 */
	getRandomCoordinates(count = 1, exclude = []) {
		exclude.push(this.food.getCoordinates(), ...this.snake.body, ...this.walls.points);

		const randomPoints = [];

		while (randomPoints .length < count) {
			const rndPoint = {
				x: Math.floor(Math.random() * this.settings.colsCount),
				y: Math.floor(Math.random() * this.settings.rowsCount)
			}

			if(!exclude.some(exPoint => rndPoint.x === exPoint.x && rndPoint.y === exPoint.y)) {
				randomPoints.push(rndPoint);
				exclude.push(rndPoint);
			}
		}

		return count === 1 ? randomPoints[0] : randomPoints;
	},

};

window.onload = () => game.init({speed: 5, winLength: 15});