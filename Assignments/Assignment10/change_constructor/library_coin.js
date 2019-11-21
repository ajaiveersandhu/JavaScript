"use strict";

class Coins {
    constructor(cents) {
        this.cents = cents;
    }
    
    isValid() {
        if(isNaN(parseInt(this.cents))) {
            alert("Cents entry must be NUMERIC.");
            if(this.cents < 0 || this.cents > 99) {
                alert("Valid range is 0 to 99.");
            }
        }
    }
    
    getNumber(divisor) {
        let divisorFactor = Math.floor((this.cents) / divisor);
        this.cents = this.cents - (divisor * divisorFactor);
        return divisorFactor;
//        console.log(divisorFactor);
//        console.log(output);
    }
};