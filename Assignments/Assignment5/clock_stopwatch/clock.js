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
	// do first tick of stop watch and then set interval timer to tick 
	// stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
	// variable so next two functions can stop timer.

};

var stopStopwatch = function (evt) {
	// prevent default action of link
	evt.preventDefault();
	clearTimeout(tickTimer);
	// stop timer

};

var resetStopwatch = function (evt) {
	// prevent default action of link
	evt.preventDefault();
	clearTimeout(tickTimer);
	document.querySelector("#s_ms").innerHTML = 00;
	document.querySelector("#s_seconds").innerHTML = 00;
	document.querySelector("#s_minutes").innerHTML = 00;
	// stop timer

	// reset elapsed variables and clear stopwatch display

};

window.onload = function () {
	let clockTimer = setInterval(displayCurrentTime, 1000);
	document.querySelector("#start").addEventListener("click", startStopwatch);
	document.querySelector("#stop").addEventListener("click", stopStopwatch);
	document.querySelector("#reset").addEventListener("click", resetStopwatch);
};
