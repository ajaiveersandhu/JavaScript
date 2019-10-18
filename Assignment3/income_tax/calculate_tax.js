"use strict";
var get_id = function (id) {
	return document.getElementById(id);
};

var tax_owed = 0;

function calculate_Tax(income) {

	let lower_limit = 0;
	let over_income; // how much over income of lower limit

	if (income == 0 && income < 9275) {
		return 0;
	} else if (income >= 9275 && income < 37650) {
		lower_limit = 9275;

		if (income == 9275) {
			return 927.50;
		} else {
			return ((Math.round(((income - lower_limit) * 0.15) * 100) / 100) + 927.50); // Math.round(num*100)/100
		}
	} else if (income >= 37650 && income < 91150) {
		lower_limit = 37650;

		if (income == 37650) {
			return 5183.75;
		} else {
			return ((Math.round(((income - lower_limit) * 0.25) * 100) / 100) + 5183.75); // Math.round(num*100)/100
		}
	} else if (income >= 91150 && income < 190150) {
		lower_limit = 91150;

		if (income == 91150) {
			return 18558.75;
		} else {
			return ((Math.round(((income - lower_limit) * 0.28) * 100) / 100) + 18558.75); // Math.round(num*100)/100
		}
	} else if (income >= 190150 && income < 413350) {
		lower_limit = 190150;

		if (income == 190150) {
			return 46278.75;
		} else {
			return ((Math.round(((income - lower_limit) * 0.33) * 100) / 100) + 46278.75); // Math.round(num*100)/100
		}
	} else if (income >= 413350 && income < 415050) {
		lower_limit = 413350;

		if (income == 413350) {
			return 119934.75;
		} else {
			return ((Math.round(((income - lower_limit) * 0.35) * 100) / 100) + 119934.75); // Math.round(num*100)/100
		}
	} else {
		lower_limit = 415050;

		if (income == 415050) {
			return 120529.75;
		} else {
			return ((Math.round(((income - lower_limit) * 0.396) * 100) / 100) + 120529.75); // Math.round(num*100)/100
		}
	}
}

function processEntry() {
	let user_Entry = parseFloat(get_id("income").value);
	console.log(user_Entry);
	if (!isNaN(user_Entry) && (user_Entry > 0)) {
		tax_owed = calculate_Tax(user_Entry);
		get_id("tax").value = tax_owed;
	} else {
		alert("Error Message, Are you stupid ?");
	}
}

window.onload = function () {
	get_id("calculate").onclick = processEntry;
	get_id("income").focus();
};
