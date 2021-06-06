"use strict";
$(document).ready(function () {
    var getRandomNumber = function (max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
        }
        return random;
    };

    $("#generate").click(function () {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        var user_input = $("#num").val();
        var generated_password;
        if(!isNaN(user_input) && user_input != "") {
            generated_password = chars.charAt(getRandomNumber(parseInt(Math.random()*100))).toString();
            for(let x = 1; x < user_input; x++) {
                generated_password = generated_password.concat(chars.charAt(getRandomNumber(parseInt(Math.random()*100))));
            }
        } else {
            alert("Please enter a valid number.");
        }
        $("#password").val(generated_password); // clear previous entry

    }); // end click()

    $("#clear").click(function () {
        $("#num").val("");
        $("#password").val("");
        $("#num").focus();
    }); // end click()

    // set focus on initial load
    $("#num").focus();
}); // end ready()
