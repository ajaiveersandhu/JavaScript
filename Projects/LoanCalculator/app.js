// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", event => {
	// Show the loader for User Experience
	document.getElementById("loading").style.display = "block";
	setTimeout(calculateResults, 2000);
	event.preventDefault();
});

document.getElementById("amount").addEventListener("focus", () => {
	// Hide the results
	document.getElementById("results").style.display = "none";
	// Hiding the loader again
	document.getElementById("loading").style.display = "none";
	// document.getElementById("amount").value = "";
	// document.getElementById("interest").value = "";
	// document.getElementById("years").value = "";
});

// Calculate Results
function calculateResults() {
	// UI variables
	const amount = document.getElementById("amount");
	const interest = document.getElementById("interest");
	const years = document.getElementById("years");
	const monthlyPayment = document.getElementById("monthly-payment");
	const totalPayment = document.getElementById("total-payment");
	const totalInterest = document.getElementById("total-interest");

	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayment = parseFloat(years.value) * 12;

	// Compute Monthly Payments
	const x = Math.pow(1 + calculatedInterest, calculatedPayment);
	const monthly = (principal * x * calculatedInterest) / (x - 1);

	if (isFinite(monthly)) {
		// Display the results
		document.getElementById("results").style.display = "block";
		// Hiding the loader again
		document.getElementById("loading").style.display = "none";

		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayment).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
	} else {
		showError("Please check your numbers.");
	}
}

// showError
function showError(error) {
	// Hide the results
	document.getElementById("results").style.display = "none";
	// Hiding the loader again
	document.getElementById("loading").style.display = "none";
	// Create a Div
	const errorDiv = document.createElement("div");

	// Add Class 
	errorDiv.className = "alert alert-danger";

	// Create text node and append to div
	errorDiv.appendChild(document.createTextNode(error));

	// Insert errorDiv before heading
	document.querySelector(".card").insertBefore(errorDiv, document.querySelector(".heading"));

	// Clear error message after 2 seconds
	setTimeout(clearError, 2000);
}

// Clear Error
function clearError() {
	document.querySelector(".alert").remove();
}