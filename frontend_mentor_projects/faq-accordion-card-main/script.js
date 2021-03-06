const questionsList = [
	{
		question: 'How many team members can I invite?',
		answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
	},
	{
		question: 'How many team members can I invite?',
		answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
	},
	{
		question: 'What is the maximum file upload size?',
		answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
	},
	{
		question: 'How do I reset my password?',
		answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
	},
	{
		question: 'Can I cancel my subscription?',
		answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
	},
	{
		question: 'Do you provide additional support?',
		answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
	},
	{
		question: '   Do you provide additional support?',
		answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
	},
	
];

/*

const uniq = Array.from(questionsList.reduce((map, obj) => map.set(obj.question, obj), new Map()).values())

*/

const newQuestionsList = [... new Map(questionsList.map((item) => [item.question.trim(), item])).values()];




let test_uniqobjArray_map = questionsList.map((item) => [item.question.trim(), item]);

let test_uniqobjArray_NewMap = new Map(test_uniqobjArray_map)

let test_uniqobjArray_NewMap_keys = test_uniqobjArray_NewMap.keys();

let test_uniqobjArray_NewMap_values = test_uniqobjArray_NewMap.values();

let test_uniqobjArray_NewMap_values_AsArray = [...test_uniqobjArray_NewMap_values];
console.log(test_uniqobjArray_NewMap_values_AsArray);





/*


const newQuestionsList = questionsList.filter(function (item, index, self) {
	return index === self.findIndex(function(t){

		return t.question.trim()  === item.question.trim() 
		// && t.answer === item.answer
	})
})

*/

const sectionCenter = document.querySelector('.section-text');

window.addEventListener('DOMContentLoaded', function () {


	newQuestionsList.forEach(function (item) {
		addElement(item.question, item.answer);
	});

	listenerBtns()
});

function addElement(question, answer) {

	const questionElem = document.createElement('div');
	questionElem.classList.add('question');

	questionElem.innerHTML = `
		<div class="question-title">
			<p>
				${question}
			</p>
			<button class="question-btn">
				<span class="down-arrow">
					<img src="images/icon-arrow-down.svg" alt="">
				</span>
			</button>
		</div>
		<div class="question-text">
			<p>
				${answer}
			</p>
		</div>
	`;
	sectionCenter.appendChild(questionElem);
};

function listenerBtns() {
	const questions = document.querySelectorAll('.question');

	questions.forEach(function (question) {
		const btn = question.querySelector('.question-title');

		btn.addEventListener('click', function () {
			questions.forEach(function (item) {
				if (item !== question) {
					item.classList.remove('show-text');
					item.classList.remove('active');
				}
			})

			question.classList.toggle('show-text');
			question.classList.toggle('active');
		});
	});
};




//========================================================================================================================================================
function listenerBtns2() {
	const btns = document.querySelectorAll('.question-btn');

	btns.forEach(function (btn) {
		btn.addEventListener('click', function (e) {
			const question = e.currentTarget.parentElement.parentElement;
			question.classList.toggle('show-text');
		});

	});
};

//========================================================================================================================================================
