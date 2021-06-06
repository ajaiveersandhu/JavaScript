"use strict";

class Coins {
    constructor(cents) {
        this.cents = cents;
    }
    
    isValid() {
        alert("Please enter a valid number between 0 and 99");
    }
    
    getNumber(divisor) {
        let divisorFactor = Math.floor((this.cents) / divisor);
        this.cents = this.cents - (divisor * divisorFactor);
        return divisorFactor;
//        console.log(divisorFactor);
//        console.log(output);
    }
};