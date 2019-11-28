let question,
	option1,
	option2,
	option3,
	option4,
	correctOption,
	timeMinsUpdate,
	radioButtonClicked,
	nextQuestion,
	endQuiz,
	questionNumber,
	userFullName;

let displayedQuestion = [];
let randomQuestionFetch;
let answer;
let numberOfCorrectAnswers = 0;
let currentQuestion = 1;
let interval;


// Event Listeners
window.addEventListener("load", () => {
	timeMinsUpdate = document.querySelector(".minsLefts");
	question = document.querySelector(".question");
	option1 = document.querySelector(".option1");
	option2 = document.querySelector(".option2");
	option3 = document.querySelector(".option3");
	option4 = document.querySelector(".option4");
	radioButtonClicked = document.querySelectorAll('input[name=group1]');
	userFullName = document.querySelector(".user-full-name");

	let currentUser = JSON.parse(localStorage.getItem("currentUser"));
	userFullName.innerHTML = currentUser[0]["name"];

	questionNumber = document.querySelector(".question-number");
	nextQuestion = document.querySelector(".next-question");
	endQuiz = document.querySelector(".end-quiz");
	document.querySelector(".fill-bar").classList.add("start-filling-bar-mins");
	loadQuestionFunctions();
	ready();
});

function ready() {

	topRightTimer();

	// Every 15 seconds questions id will be added to array
	interval = setInterval(() => {

		loadQuestionFunctions();
	}, 15000);

	nextQuestion.addEventListener("click", () => {
		document.querySelector(".timer-bar").classList.remove("timer-bar-fill");
		loadQuestionFunctions();
	});

	endQuiz.addEventListener("click", () => {
		clearInterval(interval);
		// remove question time bar class
		document.querySelector(".timer-bar").classList.remove("timer-bar-fill");

		displayToast(`You had ${numberOfCorrectAnswers} correct answers.`);
	});
}

function topRightTimer() {
	// Top Right Hand Minutes Left
	let end = 600;

	// Get the containers
	let min = document.querySelector(".minsLeft");
	let sec = document.querySelector(".secsLeft");

	// Start if not past end secs 
	if (end > 0) {
		let ticker = setInterval(function () {
			// Stop if passed end time
			end--;
			if (end <= 0) {
				clearInterval(ticker);
				end = 0;
			}

			// Calculate remaining time
			var secs = end;
			var mins = Math.floor(secs / 60); // 1 min = 60 secs
			secs -= mins * 60;

			// Update HTML
			min.innerHTML = mins;
			sec.innerHTML = secs;
		}, 1000);
	}
}

function loadQuestionFunctions() {
	if (displayedQuestion.length >= 10) {
		clearInterval(interval);
		// remove question time bar class
		document.querySelector(".timer-bar").classList.remove("timer-bar-fill");

		displayToast(`You had ${numberOfCorrectAnswers} correct answers.`);
	} else {
		// adding class for animation to start
		document.querySelector(".timer-bar").classList.add("timer-bar-fill");

		questionNumber.innerHTML = currentQuestion;

		// to fetch and update question and options in web page
		loadQuestion();
		getAnswer();

		unCheckNextOptions();
	}
}

function loadQuestion() {
	randomQuestionFetch = Math.floor(Math.random() * 60);

	if (!(randomQuestionFetch in displayedQuestion)) {
		displayedQuestion.push(randomQuestionFetch);

		currentQuestion++;

		fetch("../questionBank/questionBank.json")
			.then(response => response.json())
			.then(data => {
				question.innerHTML = data[randomQuestionFetch]["question"];
				option1.innerHTML = data[randomQuestionFetch]["options"][0];
				option2.innerHTML = data[randomQuestionFetch]["options"][1];
				option3.innerHTML = data[randomQuestionFetch]["options"][2];
				option4.innerHTML = data[randomQuestionFetch]["options"][3];
				correctOption = data[randomQuestionFetch]["correctIndex"];
				correctOption = `option${correctOption+1}`;
			})
			.catch(error => console.log(error));
	} else {
		loadQuestion();
	}
}

function getAnswer() {
	if (document.getElementById("option1").checked === true) {
		selectedAnswer("option1");
	} else if (document.getElementById("option2").checked === true) {
		selectedAnswer("option2");
	} else if (document.getElementById("option3").checked === true) {
		selectedAnswer("option3");
	} else if (document.getElementById("option4").checked === true) {
		selectedAnswer("option4");
	}
}

function selectedAnswer(option) {
	if (option === correctOption) {
		numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
	} else {
		numberOfCorrectAnswers = numberOfCorrectAnswers;
	}

	return numberOfCorrectAnswers;
}

function unCheckNextOptions() {
	radioButtonClicked.forEach(radio => {
		radio.checked = false;
	});
}

function displayToast(msg) {
	M.toast({
		html: ` ${msg} `,
		displayLength: 1500,
		classes: 'rounded'
	});
}