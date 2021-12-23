const game = () => {

	let pScore = 0;
	let cScore = 0;
	let maxScore = 3;
	
	const init = () => {
		const winner = document.querySelector('.winner');
		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');
		
		playerHand.src = `assets/rock.png`;
		computerHand.src = `assets/rock.png`;

		winner.textContent = 'Choose an option';
		pScore = 0;
		cScore = 0;
		
	}

	
	// Start the Game
	const startGame = () => {
			const playBtn = document.querySelector('.intro button');
			const introScreen = document.querySelector('.intro');
			const match = document.querySelector('.match');

			playBtn.addEventListener('click', () => {
				introScreen.classList.add('fadeOut');
				match.classList.add('fadeIn');
				// init();
				updateScore();
			});
	};
	// Finish The Game
	const finishGame = () => {
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');
		const wonScreen = document.querySelector('.intro h1')

		if(pScore == maxScore || cScore === maxScore){
			setTimeout(()=>{
				introScreen.classList.remove('fadeOut');
				if(pScore > cScore){
					wonScreen.textContent = 'Congratulations, you won!!!';
				} else {
					wonScreen.textContent = 'Sorry, you lost!!!';
				}
				init();
				// pScore = 0;
				// cScore = 0;
			},1000)
			match.classList.remove('fadeIn');
		}
		

	};

	//Play Match
	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');
		const hands = document.querySelectorAll('.hands img');

		hands.forEach(hand => {
			hand.addEventListener('animationend', function() {
				this.style.animation = ''; 
			});
		})
		// Computer Options
		const computerOptions = ['rock', 'paper', 'scissors'];

		options.forEach(option => {
			option.addEventListener('click', function () {
				// Computer Choice
				const computerNumber = Math.floor(Math.random() * 3) ;
				const computerChoice  = computerOptions[computerNumber];

				// Returns start images
				(function() {
					playerHand.src = `assets/rock.png`;
					computerHand.src = `assets/rock.png`;
				})();

				setTimeout(() => {
					// Here is where we call compare hands
					compareHands(this.textContent, computerChoice)
					//Update Images
					playerHand.src = `assets/${this.textContent}.png`;
					computerHand.src = `assets/${computerChoice}.png`;
				},  2000)

				//Animation
				playerHand.style.animation = 'shakePlayer 2s ease';
				computerHand.style.animation = 'shakeComputer 2s ease';

				
			});
		});
	};
	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
		
		finishGame();
	}

	const compareHands = (playerChoice, computerChoice) => {
		//Update Text
		const winner = document.querySelector('.winner');
		// Cheking for a tie
		if(playerChoice === computerChoice){
			winner.textContent = 'It is a tie';
			return;
		}
		//Check of Rock
		if(playerChoice === 'rock'){
			if(computerChoice === 'scissors'){
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
		//Check Paper
		if(playerChoice === 'paper'){
			if(computerChoice === 'rock'){
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
		//Check Scissors
		if(playerChoice === 'scissors'){
			if(computerChoice === 'paper'){
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
	};

	// Is call all the inner function
	// init();
	startGame();
	playMatch();
};

// start the game function
game();
