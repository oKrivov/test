'use strict'

/**
 * @property{Object} settings - Объект с настройками галереи.
 * @property{string} settings.openedImageWrapperClass - Класс для обертки открытой картинки.
 * @property{string} settings.openedImageClass - Класс открытой картинки.
 * @property{string} settings.openedImageScreenClass - Класс для ширмы открытой картинки.
 * @property{string} settings.openedImageCloseBtnClass - Класс для картинки кнопки закрыть.
 * @property{string} settings.openedImageCloseBtnSrc - Путь до картинки кнопки открыть.
 * @property{string} settings.openedImageNextBtnSrc - Путь до картинки стрелкой вправо.
 * @property{string} settings.openedImageNextBtnClass - Класс картинки стрелкой вправо.
 * @property{string} settings.openedImageBackBtnSrc - Путь до картинки стрелкой влево.
 * @property{string} settings.openedImageBackBtnClass - Класс картинки стрелкой влево.
 * @property{string} settings.imageNotFoundSrc - Путь до стандартной картинки-заглушки.
 */
const gallery = {
	openedImageEl: null,

	settings: {
		previewSelector: '.mySuperGallery',
		openedImageWrapperClass: 'galleryWrapper',
		openedImageScreenClass: 'galleryWrapper__screen',
		openedImageCloseBtnClass: 'galleryWrapper__close',
		openedImageCloseBtnSrc: 'images/gallery/close.png',
		openedImageClass: 'galleryWrapper__image',
		openedImageNextBtnSrc: 'images/gallery/next.png',
		openedImageNextBtnClass: 'galleryWrapper__next',
		openedImageBackBtnSrc: 'images/gallery/back.png',
		openedImageBackBtnClass: 'galleryWrapper__back',
		imageNotFoundSrc: 'images/gallery/not_found.jpg',
	}, 

	/**
	 * Инициалищирует галерею, ставит обработчик события.
	 * @param {Object} settings  Объект настроек галереи.
	 */
	init(settings = {}) {
		this.settings = Object.assign(this.settings, settings);

		/*
			Находим элемент, где будет превью картинок и ставим обработчик на этот элемент,
			при клики на этот элемент вызовем функцию containerClickHandler в нашем объекте
			gllery и передадим теда событие MouseEvent, которое случилось.
		*/
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

		this.openedImageEl = event.target;

		this.openImage(event.target.dataset.full_image_url);

		
	},

	/**
	 * Открывает картинку.
	 * @param {string} src  Ссылка на картинку, которую надо открыть.
	 */
	openImage(src) {
		

		//Пробукм загрузить картинку, ксли картинка загружена - показываем картинку с полученным из
		// целевого тега (data-ful_image_url атрибут), если картинка не загрузилась - показываем картинку заглушку.
		// Получаем контейнер для открытой картинки, в нем находится тег img и ставим ему src/
		const openedImageEl = this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`);
		const img = new Image();
		img.onload = () => openedImageEl.src = src;;
		img.onerror = () => openedImageEl.src = this.settings.imageNotFoundSrc;
		img.src = src;

	},

	/**
	 * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
	 * @returns {Element}
	 */
	getScreenContainer() { 
		// Получаем контейнер для открытой картинки
		const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
		// Если контейнер для открытой картинки существут  - возвращаем его.
		if(galleryWrapperElement) {
			return galleryWrapperElement;
		}

		return this.createScreenContainer();
	},

	createScreenContainer() {
		const galleryWrapperElement = document.createElement('div');
		galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);
		document.body.appendChild(galleryWrapperElement);

		const backBtn = new Image();
		backBtn.classList.add(this.settings.openedImageBackBtnClass);
		backBtn.src = this.settings.openedImageBackBtnSrc;
		galleryWrapperElement.appendChild(backBtn);
	
		backBtn.addEventListener('click', () => {
			this.openedImageEl = this.getPrevImage();
			this.openImage(this.openedImageEl.dataset.full_image_url)
		}); 

		const nextBtn = new Image();
		nextBtn.classList.add(this.settings.openedImageNextBtnClass);
		nextBtn.src = this.settings.openedImageNextBtnSrc;
		galleryWrapperElement.appendChild(nextBtn);

		nextBtn.addEventListener('click', () => {
			this.openedImageEl = this.getNextImage();
			this.openImage(this.openedImageEl.dataset.full_image_url)
		}); 


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

	/**
	 * Возвращает Следующий элемент (картинку) от открытой или перевый картинку в контейнере,
	 * если текущая картинка последняя.
	 * @returns {Element} Следующую картинку от открытой. 
	 */
	getNextImage() {
		const nextSibling = this.openedImageEl.nextElementSibling;
		return nextSibling ? nextSibling : this.openedImageEl.parentNode.firstElementChild;
	},

	/**
	 * Возвращает предыдущий элемент (картинку) от открытой или последнюю картинку в контейнере,
	 * если текущая картинка первая.
	 * @returns {Element} Предыдущую картинку от открытой. 
	 */
	getPrevImage() {
		const prevSibling = this.openedImageEl.previousElementSibling;
		return prevSibling ? prevSibling : this.openedImageEl.parentNode.lastElementChild;
	},

	close() {
		document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
	},
};

window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});