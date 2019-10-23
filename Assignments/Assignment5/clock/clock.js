"use strict";
let displayCurrentTime = function () {
	let time = new Date();
	let current_hour = padSingleDigit(time.getHours());
	let timeOfDay = "PM";
	if (current_hour > 12) {
		current_hour = current_hour - 12;
		current_hour = padSingleDigit(current_hour);
	} else {
		current_hour = padSingleDigit(current_hour);
		timeOfDay = "AM";
	}
	document.querySelector("#hours").innerHTML = current_hour;
	document.querySelector("#minutes").innerHTML = padSingleDigit(time.getMinutes());
	document.querySelector("#seconds").innerHTML = padSingleDigit(time.getSeconds());
	document.querySelector("#ampm").innerHTML = timeOfDay;
};

function padSingleDigit(num) {
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}

function timer() {
	let setTimer = setInterval(displayCurrentTime, 1);
}
window.addEventListener(onload, timer());
