"use strict";

let Coins = {
    cents: 0,
    
    isValid: function() {
        if(isNaN(parseInt(this.cents))) {
            alert("Cents entry must be NUMERIC.");
            if(this.cents < 0 || this.cents > 99) {
                alert("Valid range is 0 to 99.");
            }
        }
    },
    
    getNumber: function(divisor) {
        let divisorFactor = Math.floor((this.cents) / divisor);
        this.cents = this.cents - (divisor * divisorFactor);
        return divisorFactor;
//        console.log(divisorFactor);
//        console.log(output);
    }
};