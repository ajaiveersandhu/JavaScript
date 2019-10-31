class Calculator {
    constructor(previousOutput, currentOutput) {
        this.previousOutputText = previousOutputText;
        this.currentOutputText = currentOutputText;
        this.screenClear();
    }

    screenClear() {
        this.currentOutput = '';
        this.previousOutput = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === "." && this.currentOutput.includes(".")) return;
        this.currentOutput = this.currentOutput.toString() + number.toString();
    }

    selectOperation(operation) {
        if (operation === "") return;
        if (this.previousOutput !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousOutput = this.currentOutput;
        this.currentOutput = "";
    }

    calculate() {
        let compute;
        const previous = parseFloat(this.previousOutput);
        const current = parseFloat(this.currentOutput);
        if (isNaN(previous) && isNaN(current)) return;
        switch (this.operation) {
            case "+":
                compute = previous + current;
                break;
            case "-":
                compute = previous - current;
                break;
            case 'x':
                compute = previous * current;
                break;
            case '÷':
                compute = previous / current;
                break;
            default:
                return;
        }
        this.currentOutput = compute;
        this.operation = undefined;
        this.previousOutput = '';
    }

    updateDisplay() {
        this.currentOutputText.innerText = this.currentOutput;
        this.previousOutputText.innerText = this.previousOutput;
        if (this.operation != null) {
            this.previousOutputText.innerText =
                `${this.previousOutput} ${this.operation}`;
        } else {
            this.previousOutputText.innerText = "";
        }
    }
}

const number = document.querySelectorAll(".numbers");
const operation = document.querySelectorAll(".basicSymbols");
const btnEquals = document.querySelector(".btnEquals");
const btnDEL = document.querySelector(".btnDEL");
const btnAC = document.querySelector(".btnAC");
const previousOutputText = document.querySelector("#previousOutput");
const currentOutputText = document.querySelector("#currentOutput");

// long press DEL button, just like in android calculator app
// let delay;
// let longPress = 1500;

let calculator = new Calculator(previousOutputText, currentOutputText);

number.forEach(function (current) {
    current.addEventListener("click", () => {
        calculator.appendNumber(current.innerText);
        calculator.updateDisplay();
    })
});

operation.forEach(function (operation) {
    operation.addEventListener("click", () => {
        calculator.selectOperation(operation.innerText);
        calculator.updateDisplay();
    })
});

btnAC.addEventListener("click", () => {
    calculator.screenClear();
    calculator.updateDisplay();
});

btnDEL.addEventListener("click", function () {
    calculator.delete();
    calculator.updateDisplay();
})

btnEquals.addEventListener("click", function () {
    calculator.calculate();
    calculator.updateDisplay();
});