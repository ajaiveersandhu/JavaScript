"use strict";

let Coins = function (cents, divisor) {
    let bingoCoins = {
        isValid: function () {
            alert("Please enter a valid number between 0 and 99");
        }

        getNumber: function (divisor) {
            let divisorFactor = Math.floor((this.cents) / divisor);
            this.cents = this.cents - (divisor * divisorFactor);
            return divisorFactor;
            //        console.log(divisorFactor);
            //        console.log(output);
        }
    }

    let bingoTest = Object.create(bingoCoins);
    bingoTest.cents = cents;
    bingoTest.divisor = divisor;
    return bingoTest;
};
