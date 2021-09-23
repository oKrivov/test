const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
	// console.log(question);
	const btn = question.querySelector('.question-btn');
	// const questionTitle = question.querySelector('.question-title');

	// console.log(questionTitle);
	btn.addEventListener('click', function() {

		questions.forEach(function(item) {
			if (item !== question) {
				item.classList.remove('show-text');
				item.classList.remove('active');
			}
		})

		question.classList.toggle('show-text');
		question.classList.toggle('active');

	})
})



// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
// 	btn.addEventListener('click', function(e) {
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle('show-text');
// 	});
// })