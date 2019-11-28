let firstName,
	userName,
	email,
	password,
	verifyPassword;

let userEntry;


window.addEventListener("load", () => {
	firstName = document.querySelector("#firstName");
	userName = document.querySelector("#username");
	email = document.querySelector("#email");
	password = document.querySelector("#password");
	verifyPassword = document.querySelector("#verifyPassword");

	document.querySelector(".btn-sign-up").addEventListener("click", () => {
		signUp();
	});

});

function displayToast(msg) {
	M.toast({
		html: ` ${msg} `,
		displayLength: 1500,
		classes: 'rounded'
	});
}
// Sing up
function signUp() {
	if (firstName.value == null || firstName.value == "") {
		displayToast("Please enter FIRST NAME");
		return false;
	} else if (userName.value == null || userName.value == "") {
		displayToast("Please enter USERNAME");
		return false;
	} else if (email.value == null || email.value == "") {
		displayToast("Please enter EMAIL");
		return false;
	} else if (password.value == null || password.value == "") {
		displayToast("Please enter PASSWORD");
		return false;
	} else if (password.value != verifyPassword.value) {
		displayToast("Password MISS-MATCH");
		return false;
	// } else if (password.value.length <= 8) {
	// 	displayToast("Minimum Password length 8");
	// 	return false;
	} else {
		userEntry = [{
			"name": firstName.value,
			"username": username.value,
			"email": email.value,
			"password": password.value
		}];
		storeUserDetails();
	}
}

function storeUserDetails() {
	let userDetails;
	if (localStorage.getItem("userDetails") === null) {
		userDetails = [];
	} else {
		userDetails = JSON.parse(localStorage.getItem("userDetails"));
	}

	userDetails.push(userEntry);
	localStorage.setItem("userDetails", JSON.stringify(userEntry));
}
