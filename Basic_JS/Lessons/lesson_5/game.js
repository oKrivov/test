'use strict';

const settings = {
	rowsCount: 10,
	colsCount: 10,
	startPositionX: 1,
	startPositionY: 2,
	startDirection: 'right',
	playerCellColor: '#aaafff',
	emptyCellColor: '#eeeeee',
	stepsInSecond: 5,
};

const player = {
	x: null,
	y: null,
	direction: null,

	init(startX, startY, startDirection) {
		this.x = startX;
		this.y = startY;
		this.direction = startDirection;
	},

	getNextStepPoint() {
		const point = {
			x: this.x,
			y: this.y,
		};

		switch (this.direction) {
			case 'up':
				point.y--
				break
			case 'right':
				point.x++
				break
			case 'down':
				point.y++
				break
			case 'left':
				point.x--
				break
		}
		return point;
	},

	makeStep() {
		const nextPoint = this.getNextStepPoint();
		this.x = nextPoint.x;
		this.y = nextPoint.y;
	},

	setDirectioin(direction) {
		this.direction = direction;
	}
};

const game = {
	player,
	settings,
	containerElement: null,
	cellElements: null,

	run() {
		this.init();

		setInterval(() => {
			if (this.canPlayerMakeStep()){
				this.player.makeStep();
				this.render();
			}
		}, 1000 / this.settings.stepsInSecond);
	},

	init() {
		this.player.init(this.settings.startPositionX, this.settings.startPositionY, this.settings.startDirection);

		this.containerElement = document.getElementById('game');

		this.initCells();

		this.initEventHandler();
	},

	initEventHandler() {
		document.addEventListener('keydown', event => this.keyDownHandler(event))
	},
	keyDownHandler(event) {
		switch(event.keyCode) {
			case 38:
			case 87:
				this.player.setDirectioin('up');
				break;
			case 39:
			case 68:
				this.player.setDirectioin('right');
				break;
			case 40:
			case 83:
				this.player.setDirectioin('down');
				break;
			case 37:
			case 65:
				this.player.setDirectioin('left');
				break;
		}
	},

	initCells() {
		this.containerElement.innerHTML = '';
		this.cellElements = [];

		for(let row = 0; row < this.settings.rowsCount; row++) {
			const trElem = document.createElement('tr');
			this.containerElement.appendChild(trElem);
			for(let coll = 0; coll < this.settings.colsCount; coll++) {
				const cell = document.createElement('td');
				trElem.appendChild(cell);
				this.cellElements.push(cell);
			}
		}
	},

	render() {
		this.cellElements.forEach(cell => cell.style.backgroundColor = this.settings.emptyCellColor);

		const playerCell = document.querySelector(`tr:nth-child(${this.player.y + 1})`)
		.querySelector(`td:nth-child(${this.player.x + 1})`);
		playerCell.style.backgroundColor = this.settings.playerCellColor;
	},

	canPlayerMakeStep() {
		const nextPoint = this.player.getNextStepPoint();
		return nextPoint.x >= 0 && nextPoint.x < this.settings.colsCount &&
			nextPoint.y >= 0 && nextPoint.y < this.settings.rowsCount;
			
	},
};

window.onload = () => game.run();