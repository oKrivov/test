const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
	slide.addEventListener('click', () => {
		clearactiveClass();

		slide.classList.add('active');
	})
});
function clearactiveClass(){
	slides.forEach(slide => {
		slide.classList.remove('active');
	})
}