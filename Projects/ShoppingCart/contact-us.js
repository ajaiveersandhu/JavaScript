const email = document.getElementById("email-input");
const fullName = document.getElementById("full-name");
const phoneNumber = document.getElementById("phone-number-input");
const message = document.getElementById("message-input");
const update = document.querySelector('.update');

let flag = 0;

email.addEventListener("input", validEmail);
fullName.addEventListener("input", validfullName);
phoneNumber.addEventListener("input", validphoneNumber);
message.addEventListener("input", validmessage);

document.getElementById("submit").addEventListener("click", function () {
	if (flag === 4) {
		alert("Thanks for contacting us. We will get back to you soon.");
	} else {
		alert("Please re-enter the correct valid inputs");
	}
});

function validEmail() {
	if (email.value == null || email.value == "") {
		update.textContent = `Enter valid EMAIL`;
		update.classList.remove('success');
		update.classList.add('failure');
		removeFailureClass();
	} else {
		if (/(^\w.*@\w+\.\w)/.test(email.value)) {
			update.textContent = 'Valid Email!';
			update.classList.add('success');
			update.classList.remove('failure');
			flag++;
		} else {
			update.textContent = `Enter valid EMAIL`;
			update.classList.remove('success');
			update.classList.add('failure');
			removeFailureClass();
		}
	}
}

function validfullName() {
	if (fullName.value == null || fullName.value == "") {
		update.textContent = `Enter valid NAME`;
		update.classList.remove('success');
		update.classList.add('failure');
		removeFailureClass();
	} else {
		flag++;
	}
}

function validmessage() {
	if (message.value == null || message.value == "") {
		update.textContent = `MESSAGE can't be BLANK`;
		update.classList.remove('success');
		update.classList.add('failure');
		removeFailureClass();
	} else {
		flag++;
	}
}

function validphoneNumber() {
	if (phoneNumber.value == null || phoneNumber.value == "") {
		update.textContent = `Enter valid PHONE`;
		update.classList.remove('success');
		update.classList.add('failure');
		removeFailureClass();
	} else {
		if (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phoneNumber.value)) {
			update.textContent = 'Valid PHONE NUMBER!';
			update.classList.add('success');
			update.classList.remove('failure');
			flag++;
		}
		else {
			update.textContent = `Enter valid PHONE NUMBER`;
			update.classList.remove('success');
			update.classList.add('failure');
			removeFailureClass();
		}
	}
}

function removeFailureClass() {
	setTimeout(function () {
		update.classList.remove('failure');
	}, 1500);
}
