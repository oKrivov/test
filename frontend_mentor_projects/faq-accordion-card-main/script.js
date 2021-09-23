const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
	const btn = question.querySelector('.question-title');

	btn.addEventListener('click', function() {
		questions.forEach(function(item) {
			if (item !== question) {
				item.classList.remove('show-text');
				item.classList.remove('active');
			}
		})

		question.classList.toggle('show-text');
		question.classList.toggle('active');
	});
})




// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
// 	btn.addEventListener('click', function(e) {
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle('show-text');
// 	});
// })





/*
		<!-- single question -->
							<div class="question">
								<!--  question title -->
								<div class="question-title">
									<p>
										What is the maximum file upload size?
									</p>
									<button class="question-btn">
										<span class="down-arrow">
											<img src="images/icon-arrow-down.svg" alt="">
										</span>
									</button>
								</div>
								<!-- question text -->
								<div class="question-text">
									<p>
										You can invite up to 2 additional users on the Free plan. There is no limit on
										team members for the Premium plan.
									</p>
								</div>
							</div>
							<!-- end single question -->
							<!-- single question -->
							<div class="question">
								<!--  question title -->
								<div class="question-title">
									<p>
										How do I reset my password?
									</p>
									<button class="question-btn">
										<span class="down-arrow">
											<img src="images/icon-arrow-down.svg" alt="">
										</span>
									</button>
								</div>
								<!-- question text -->
								<div class="question-text">
									<p>
										You can invite up to 2 additional users on the Free plan. There is no limit on
										team members for the Premium plan.
									</p>
								</div>
							</div>
							<!-- end single question -->
							<!-- single question -->
							<div class="question">
								<!--  question title -->
								<div class="question-title">
									<p>
										Can I cancel my subscription?
									</p>
									<button class="question-btn">
										<span class="down-arrow">
											<img src="images/icon-arrow-down.svg" alt="">
										</span>
									</button>
								</div>
								<!-- question text -->
								<div class="question-text">
									<p>
										Yes! Send us a message and we’ll process your request no questions asked.
									</p>
								</div>
							</div>
							<!-- end single question -->
							<!-- single question -->
							<div class="question">
								<!--  question title -->
								<div class="question-title">
									<p>
										Do you provide additional support?
									</p>
									<button class="question-btn">
										<span class="down-arrow">
											<img src="images/icon-arrow-down.svg" alt="">
										</span>
									</button>
								</div>
								<!-- question text -->
								<div class="question-text">
									<p>
										Chat and email support is available 24/7. Phone lines are open during normal business
										hours.
									</p>
								</div>
							</div>
							<!-- end single question -->
*/