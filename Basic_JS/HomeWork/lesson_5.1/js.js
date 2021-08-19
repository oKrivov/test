'use strict'

/**
 * @property {HTMLElement} gameContainerEl Контейнео игры.
 */
const chess = {
	gameContainerEl: document.getElementById('game'),

	figures: [
		{name:'p', color:'w', pos:'a2'},
		{name:'p', color:'w', pos:'b2'},
		{name:'p', color:'w', pos:'c2'},
		{name:'p', color:'w', pos:'d2'},
		{name:'p', color:'w', pos:'e2'},
		{name:'p', color:'w', pos:'f2'},
		{name:'p', color:'w', pos:'g2'},
		{name:'p', color:'w', pos:'h2'},
		{name:'R', color:'w', pos:'a1'},
		{name:'N', color:'w', pos:'b1'},
		{name:'B', color:'w', pos:'c1'},
		{name:'Q', color:'w', pos:'d1'},
		{name:'K', color:'w', pos:'e1'},
		{name:'B', color:'w', pos:'f1'},
		{name:'N', color:'w', pos:'g1'},
		{name:'R', color:'w', pos:'h1'},

		{name:'p', color:'b', pos:'a7'},
		{name:'p', color:'b', pos:'b7'},
		{name:'p', color:'b', pos:'c7'},
		{name:'p', color:'b', pos:'d7'},
		{name:'p', color:'b', pos:'e7'},
		{name:'p', color:'b', pos:'f7'},
		{name:'p', color:'b', pos:'g7'},
		{name:'p', color:'b', pos:'h7'},
		{name:'R', color:'b', pos:'a8'},
		{name:'N', color:'b', pos:'b8'},
		{name:'B', color:'b', pos:'c8'},
		{name:'Q', color:'b', pos:'d8'},
		{name:'K', color:'b', pos:'e8'},
		{name:'B', color:'b', pos:'f8'},
		{name:'N', color:'b', pos:'g8'},
		{name:'R', color:'b', pos:'h8'},
	],

	figureHTML: {
		pw: '&#9817;',
		Bw: '&#9815;',
		Nw: '&#9816;',
		Rw: '&#9814;',
		Qw: '&#9813;',
		Kw: '&#9812;',

		pb: '&#9823;',
		Bb: '&#9821;',
		Nb: '&#9822;',
		Rb: '&#9820;',
		Qb: '&#9819;',
		Kb: '&#9818;',

	},

	renderMap() {
		const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
		const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

		for(let row = 0; row < rows.length; row++) {
			const tr = document.createElement('tr');
			this.gameContainerEl.appendChild(tr);

			for (let col = 0; col < cols.length; col++) {
				const td =document.createElement('td');
				tr.appendChild(td);

				td.dataset.row = rows[row];
				td.dataset.col = cols[col];


				if(rows[row] === 0 && cols[col] !== 0){
					td.innerHTML = cols[col];
				} else if ( cols[col] === 0 && rows[row] !== 0) {
					td.innerHTML = rows[row];
				}

				if(this.isCellsBlack(row, col)) {
					td.style.backgroundColor = 'gray';
				}
			}
		}
	},

	/**
	 * Определяет является ли ячейка черной.
	 * @param {int} rowNum Номер в строке
	 * @param {int} colNum номер в колонке
	 * @param {boolean} true, если ячейка должна быть черной, иначе false. 
	 */
	isCellsBlack(rowNum, colNum) {
		if (rowNum === 0 || rowNum === 9 || colNum === 0 || colNum === 9 ){
			return false;
		}
		return (rowNum % 2 === 0 && colNum % 2 === 1) ||  (rowNum % 2 === 1 && colNum % 2 === 0)
	},

	/**
	 * Отображает фигуры.
	 */
	renderFirures() {
		for(const figure of this.figures) {
			const col = figure.pos.charAt(0);
			const row = figure.pos.charAt(1);

			document.querySelector(`[data-col='${col}'][data-row='${row}']`).innerHTML = this.figureHTML[figure.name + figure.color];
		}
	}
}

chess.renderMap();
chess.renderFirures();