function time() {
	let currentTime = new Date();
	return currentTime;
}

let displayCurrentTime = function () {
	let currentHour = padSingleDigit(time().getHours());
	let timeOfDay = "PM";
	if (currentHour > 12) {
		currentHour = currentHour - 12;
		currentHour = padSingleDigit(currentHour);
	} else {
		current_hour = padSingleDigit(currentHour);
		timeOfDay = "AM";
	}
	document.querySelector("#hours").innerHTML = currentHour;
	document.querySelector("#minutes").innerHTML = padSingleDigit(time().getMinutes());
	document.querySelector("#seconds").innerHTML = padSingleDigit(time().getSeconds());
	document.querySelector("#ampm").innerHTML = timeOfDay;
};

function padSingleDigit(num) {
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}

let tick = 0;
let tickSeconds = 0;
let tickMinutes = 0;
let tickTimer = 0;

function tickStopWatch() {
	tick += 10;
	document.querySelector("#s_ms").innerHTML = tick;

	if (tick === 1000) {
		tickSeconds += 1;
		document.querySelector("#s_seconds").innerHTML = tickSeconds;
		tick = 0;
	}

	if (tickMinutes === 60) {
		tickMinutes += 1;
		document.querySelector("#s_minutes").innerHTML = tickMinutes;
		tickSeconds = 0;
	}
}

// event handler functions
var startStopwatch = function (evt) {
	evt.preventDefault();
	tickTimer = setInterval(tickStopWatch, 10);
};

var stopStopwatch = function (evt) {
	evt.preventDefault();
	clearTimeout(tickTimer);
};

var resetStopwatch = function (evt) {
	evt.preventDefault();
	clearTimeout(tickTimer);
	document.querySelector("#s_ms").innerHTML = "000";
	document.querySelector("#s_seconds").innerHTML = "00";
	document.querySelector("#s_minutes").innerHTML = "00";
	tick = 0;
	tickSeconds = 0;
	tickMinutes = 0;

};

window.onload = function () {
	let clockTimer = setInterval(displayCurrentTime, 1000);
	document.querySelector("#start").addEventListener("click", startStopwatch);
	document.querySelector("#stop").addEventListener("click", stopStopwatch);
	document.querySelector("#reset").addEventListener("click", resetStopwatch);
};
