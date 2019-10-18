"use strict";
function get_Id(id) {
	return document.getElementById(id);
}

function toFahrenheit() {
	get_Id("degree_label_1").innerHTML = "Enter C degrees:";
	get_Id("degree_label_2").innerHTML = "Degrees Fahrenheit:";
	clearTextBoxes();
	get_Id("degrees_entered").focus();
}

function toCelsius() {
	get_Id("degree_label_1").innerHTML = "Enter F degrees:";
	get_Id("degree_label_2").innerHTML = "Degrees Celsius:";
	clearTextBoxes();
	get_Id("degrees_entered").focus();
}

function convertTemp() {
	if (get_Id("to_celsius").checked) {
//		(32°F − 32) × 5/9
		get_Id("degrees_computed").value = (((get_Id("degrees_entered").value) - 32) * 5 / 9);
	}
	
	if (get_Id("to_fahrenheit").checked) {
//		(0°C × 9/5) + 32
		get_Id("degrees_computed").value = (((get_Id("degrees_entered").value) * 9 / 5 ) + 32 );
	}
}

function clearTextBoxes() {
	get_Id("degrees_entered").value = "";
	get_Id("degrees_computed").value = "";
};

window.onload = function () {
	get_Id("convert").onclick = convertTemp;
	get_Id("to_celsius").onclick = toCelsius;
	get_Id("to_fahrenheit").onclick = toFahrenheit;
	get_Id("degrees_entered").focus();
};















