function process_Entries(subtotal, rate) {
	var subtotal = parseFloat(document.getElementById("subtotal").value);
	var rate = parseFloat(document.getElementById("tax_rate").value);

	if (isNaN(subtotal) || subtotal < 0 && subtotal >= 10000) {
		alert("Subtotal must be > 0 and < 10000 ");
		return;
	}

	if (isNaN(rate) || rate < 0 || rate >=13) {
		alert("Tax Rate must be > 0 and < 12");
		return;
	}

	console.log("working");
	let sales_tax_Input = document.getElementById("sales_tax");
	let total_Input = document.getElementById("total");

	let sales_tax = (subtotal * rate) / 100;
	let total = subtotal + sales_tax;

	sales_tax_Input.value = sales_tax;
	total_Input.value = total;

}

function clear_Func() {
	document.getElementById("subtotal").value = "";
	document.getElementById("tax_rate").value = "";
	document.getElementById("sales_tax").value = "";
	document.getElementById("total").value = "";
}

window.onload = function () {
	let calculate = document.getElementById("calculate");
	calculate.onclick = process_Entries;

	document.getElementById("subtotal").focus();

	let clear = document.getElementById("clear");
	clear.onclick = clear_Func;
}
