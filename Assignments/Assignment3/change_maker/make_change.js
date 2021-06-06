var get_id = function (id) {
	return document.getElementById(id);
};

function makeChange(cents) {
	this.cents = cents;

	let quarter = Math.floor(cents / 25);
	cents = cents - quarter * 25;

	let dime = Math.floor(cents / 10);
	cents = cents - dime * 10;

	let nickel = Math.floor(cents / 5);
	cents = cents - nickel * 5;

	let penny = Math.floor(cents / 1);

	get_id("quarters").value = quarter;
	get_id("dimes").value = dime;
	get_id("nickels").value = nickel;
	get_id("pennies").value = penny;
}

function process_Entry() {
	let cents = parseInt(get_id("cents").value);
	if (cents < 0 || cents >= 99) {
		alert("Cents must be in range of 1 to 99");
	} else {
		makeChange(cents);
	}
}

window.onload = function () {
	get_id("calculate").onclick = process_Entry;
}
