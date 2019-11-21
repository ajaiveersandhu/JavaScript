"use strict";

let Coins = {
    cents: 0,
    
    isValid: function() {
        alert("Please enter a valid number between 0 and 99");
    },
    
    getNumber: function(divisor) {
        let divisorFactor = Math.floor((this.cents) / divisor);
        this.cents = this.cents - (divisor * divisorFactor);
        return divisorFactor;
    }
};