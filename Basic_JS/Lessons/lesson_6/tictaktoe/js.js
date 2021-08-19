'use strict'
const tictaktoe = {
	gameTableElement: document.getElementById('game'),
	mapValues: [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	],
	status: 'playing',
	phase: 'X',

	/**
	 * Инициалищация игры.
	 */
	init() {
		this.renderMap();
		this.initEventHandlers();
	},

	/**
	 * Отобрадение карты.
	 */
	renderMap(){
		for (let row = 0; row < 3; row++) {
			const tr = document.createElement('tr');
			this.gameTableElement.appendChild(tr);
			for (let col = 0; col < 3; col++) {
				const td = document.createElement('td');
				tr.appendChild(td);

				td.dataset.row = row;
				td.dataset.col = col;
			}
		}
	},

	/**
	 * Инициализация обработчиков соьытий.
	 */
	initEventHandlers() {
		this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
	},
	
	/**
	 * Обработчик события колика.
	 * @param {MouseEvent} event 
	 */
	cellClickHandler(event) {
		const row = event.target.dataset.row;
		const col = event.target.dataset.col;

		if(!this.isClickCell(event) || !this.isCellEmpty(row, col) || !this.isStatusPlaying()) {
			return;
		}

		this.mapValues[row][col] = this.phase;
		event.target.textContent = this.phase;

		if (this.hasWon()) {
			this.setStatusStopped();
			return this.sayWonPhrase();
			
		}

		this.togglePhase();
	},
	sayWonPhrase(){
		const figure = this.phase === 'X' ? 'Крестики': 'Нолики';
		setTimeout(() => alert(`${figure} выйграли!`), 1);
	},


	isStatusPlaying() {
		return this.status === 'playing';
	},

	setStatusStopped() {
		this.status = 'stopped';
	},

	hasWon() {
		return this.isLineWon([0, 0], [0, 1], [0, 2]) ||
			this.isLineWon([1, 0], [1, 1], [1, 2]) ||
			this.isLineWon([2, 0], [2, 1], [2, 2]) ||

			this.isLineWon([0, 0], [1, 0], [2, 0]) ||
			this.isLineWon([0, 1], [1, 1], [2, 1]) ||
			this.isLineWon([0, 2], [1, 2], [2, 2]) ||

			this.isLineWon([0, 0], [1, 1], [2, 2]) ||
			this.isLineWon([0, 2], [1, 1], [2, 0]);
	},

	isLineWon(a, b, c) {
		return this.mapValues[a[0]][a[1]] === this.mapValues[b[0]][b[1]] &&
		this.mapValues[b[0]][b[1]] ===this.mapValues[c[0]][c[1]] &&
		this.mapValues[c[0]][c[1]] !== '';
	},
	
	/**
	 * Проверка, что клик был по ячейке.
	 * @param {MouseEvent} event 
	 * @param {HTMLElement} event.target 
	 * @returns {boolean} Вернет true, если клик был по ячейке, иначе false. 
	 */
	isClickCell(event) {
		return event.target.tagName === 'TD';
	},

	togglePhase() {
		this.phase = this.phase === 'X' ? 'O': 'X';
	},

	isCellEmpty(row, col) {
		return this.mapValues[row][col] === '';
	},

};

window.onload = () => tictaktoe.init();