const FloatLabel = (() => {

	// add active class and placeholder 
	const handleFocus = (event) => {
		const target = event.target;
		target.parentNode.classList.add('active');
	};

	// remove active class and placeholder
	const handleBlur = (event) => {
		const target = event.target;
		if (!target.value) {
			target.parentNode.classList.remove('active');
		}
	};

	// register events
	const bindEvents = (element) => {
		const floatField = element.querySelector('input');
		floatField.addEventListener('focus', handleFocus);
		floatField.addEventListener('blur', handleBlur);
	};

	// get DOM elements
	const init = () => {
		const floatContainers = document.querySelectorAll('.input-box');

		floatContainers.forEach((element) => {
			if (element.querySelector('input').value) {
				element.classList.add('active');
			}

			bindEvents(element);
		});
	};

	return {
		init: init
	};
})();

FloatLabel.init();

let username,
	password;

window.addEventListener("load", () => {
	username = document.querySelector("#username");
	password = document.querySelector("#password");
	
	document.querySelector(".btn-login").addEventListener("click", verifyUser);
});

function displayToast(msg) {
	M.toast({
		html: ` ${msg} `,
		displayLength: 1500,
		classes: 'rounded'
	});
}

function verifyUser() {
	let userDetails;

	if (username.value === null || username.value === "" || password.value === null || password.value === "") {
		displayToast("Please enter login credentials.");
	} else {
		if (localStorage.getItem("userDetails") === null) {
			userDetails = [];
			displayToast("Please recheck your login credentials.");
			displayToast("Or try Sign Up");
		} else {
			userDetails = JSON.parse(localStorage.getItem("userDetails"));
		}
		userDetails.forEach(current => {
			if ((username.value === current["username"]) && (password.value === current["password"])) {
				let currentUser = [current["name"], current["email"]];

				localStorage.setItem("currentUser", JSON.stringify(currentUser));
				window.location.href = "../homepage/homepage.html";
			} else {
				displayToast("Please recheck your login credentials.");
				displayToast("Or try Sign Up");
			}
		});
	}
}