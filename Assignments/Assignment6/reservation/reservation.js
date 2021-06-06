$(document).ready(function () {
    let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    $("#arrival_date").focus();
	
    $("#reservation_form").submit(function(event) {
        let isValid = true;
		if ($("#arrival_date").val().trim() === "") {
			$("#arrival_date").next().text("This field is required.");
            isValid = false;
		}
		
		if ($("#nights").val().trim() === "") {
			$("#nights").next().text("This field is required.");
            isValid = false;
		} else if(!isNaN((parseInt($("nights").val())))) {
			$("#nights").next().text("This value must be numeric");
			isValid = false;
		}
		
		if ($("#name").val().trim() === "") {
			$("#name").next().text("This field is required.");
            isValid = false;
		}
		
        let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        let email = $("#email").val().trim();
        if (email == "") {
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
		
		let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if ($("#phone").val().trim() === "") {
			$("#phone").next().text("This field is required.");
            isValid = false;
		} else if (phoneNumber.test($("#phone"))) {
			$("#phone").next().text("Must be in 999-999-9999 format.");
			isValid = false;
		}
		if(isValid == false) {
            event.preventDefault();
        }
    });
});
