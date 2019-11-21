"use strict";
$(document).ready(function(){
    var isDate = function(text) {
        if( ! /^[01]?\d\/[0-3]\d\/\d{4}$/.test(text) ) return false;
        
        var index1 = text.indexOf( "/" );
        var index2 = text.indexOf( "/", index1 + 1 );
        var month = parseInt( text.substring( 0, index1 ) );
        var day = parseInt( text.substring( index1 + 1, index2 ) );
        
        if( month < 1 || month > 12 ) { return false; }
        //if( day > 31 ) { return false; }
        else {
            switch( month ) {
                case 2:
                    if ( day > 28 ) { return false; } // doesn't handle leap year
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if ( day > 30 ) { return false; }
                    break;
                default:
                    if ( day > 31 ) { return false; }
                    break;
            }
        }
        return true; 
    };
    
    $( "#save" ).click(function() {
        $("span").text("");   // clear any previous error messages
        var isValid = true;   // initialize isValid flag
        
        // var email = $("#email").val();
        // var phone = $("#phone").val();
        // var zip = $("#zip").val();
        // var dob = $("#dob").val();

        // associative array
        let associativeArray = [];

        associativeArray["email"] = $("#email").val();
        associativeArray["phone"] = $("#phone").val();
        associativeArray["zip"] = $("#zip").val();
        associativeArray["dob"] = $("#dob").val();

        
        if (associativeArray["email"] === "" ||
                !associativeArray["email"].match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/))
        {
            isValid = false;
            $( "#email" ).next().text("Please enter a valid email.");
        }
        if ( associativeArray["phone"] === "" || !associativeArray["phone"].match(/^\d{3}-\d{3}-\d{4}$/) ) {
            isValid = false;
            $( "#phone" ).next().text(
                "Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if ( associativeArray["zip"] === "" || !associativeArray["zip"].match(/^\d{3}(-\d{3})?$/) ) {
            isValid = false;
            $( "#zip" ).next().text("Please enter a valid zip code.");
        }
        if ( associativeArray["dob"] === "" || !isDate(associativeArray["dob"]) ) {
            isValid = false;
            $( "#dob" ).next().text(
                "Please enter a valid date in MM/DD/YYYY format.");
        }
        
        if ( isValid ) { 
            // code for associativeArray to save in profile session storage
            let profile = "";
            console.log(associativeArray);
            for(let x in associativeArray) {
                profile += `${x}=${associativeArray[x]}|`;
            }

            sessionStorage.setItem("profile", profile);
            // sessionStorage.email = email;
            // sessionStorage.phone = phone;
            // sessionStorage.zip = zip;
            // sessionStorage.dob = dob;
            
            // go to profile page
            location.href = "profile.html";
        }
        
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
});