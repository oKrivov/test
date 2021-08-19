'use strict'

/**
 * @property{Object} settings - Объект с настройками галереи.
 * @property{string} settings.openedImageWrapperClass - Класс для обертки открытой картинки.
 * @property{string} settings.openedImageClass - Класс открытой картинки.
 * @property{string} settings.openedImageScreenClass - Класс для ширмы открытой картинки.
 * @property{string} settings.openedImageCloseBtnClass - Класс для картинки кнопки закрыть.
 * @property{string} settings.openedImageCloseBtnSrc - Путь для картинки кнопки открыть.
 * @property{string} settings.imageNotFoundSrc - Путь до стандартной картинки-заглушки.
 */
const gallery = {
	settings: {
		previewSelector: '.mySuperGallery',
		openedImageWrapperClass: 'galleryWrapper',
		openedImageScreenClass: 'galleryWrapper__screen',
		openedImageCloseBtnClass: 'galleryWrapper__close',
		openedImageCloseBtnSrc: 'images/gallery/close.png',
		openedImageClass: 'galleryWrapper__image',
		imageNotFoundSrc: 'images/gallery/not_found.jpg',
	}, 

	/**
	 * Инициалищирует галерею, ставит обработчик события.
	 * @param {Object} settings  Объект настроек галереи.
	 */
	init(settings = {}) {
		this.settings = Object.assign(this.settings, settings);

		document
		.querySelector(this.settings.previewSelector)
		.addEventListener('click', event => this.containerClickHandler(event));
	},

	/**
	 *  Обработчик события клика для открытия картинки.
	 * @param {MouseEvent} event Событие клики мышью.
	 * @param {HTMLElement} event.target Событие клики мышью.
	 */
	containerClickHandler(event) {
		if(event.target.tagName !== 'IMG'){
			return;
		}
		// Открываем картинку с полученным их целевого тега (data-ful_image_url атрибут).
		// this.openImage(event.target.dataset.full_image_url);

		const img = new Image();
		img.onload = () => this.openImage(event.target.dataset.full_image_url);
		img.onerror = () =>  this.openImage(this.settings.imageNotFoundSrc);
		img.src = event.target.dataset.full_image_url;
	},

	/**
	 * Открывает картинку.
	 * @param {string} src  Ссылка на картинку, которую надо открыть.
	 */
	openImage(src) {
		this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
	},

	/**
	 * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
	 * @returns {Element}
	 */
	getScreenContainer() { 
		const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);

		if(galleryWrapperElement) {
			return galleryWrapperElement;
		}

		return this.createScreenContainer();
	},

	createScreenContainer() {		
		const galleryWrapperElement = document.createElement('div');
		galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);
		document.body.appendChild(galleryWrapperElement);

		const galleryScreenElement = document.createElement('div');
		galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
		galleryWrapperElement.appendChild(galleryScreenElement);

		const closeImageElement = new Image();
		closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
		closeImageElement.src = this.settings.openedImageCloseBtnSrc;
		closeImageElement.addEventListener('click', () => this.close());
		galleryWrapperElement.appendChild(closeImageElement);

		const image = new Image();
		image.classList.add(this.settings.openedImageClass); 
		galleryWrapperElement.appendChild(image);

		return galleryWrapperElement
	},

	close() {
		document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
	},
};

window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});