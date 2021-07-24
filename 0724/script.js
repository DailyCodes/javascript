const numButtons = document.querySelectorAll('button.num');
const opButtons = document.querySelectorAll('button.op');
const calButton = document.getElementById("cal");
const clearButton = document.getElementById("clear");
const displayDiv = document.getElementById('display');
class Calculator {
    constructor() {
        this.a = null;
        this.b = null;
        this.op = null;
        this.temp = "0";
        this.toggleSign = function () {
            if (this.temp === "0")
                return;
            this.temp = this.temp.startsWith("-") ? this.temp.slice(1) : "-" + this.temp
            return this.temp
        }
        this.setTemp = function (val) {
            // "0"일 경우 기존 값을 삭제하고 표시
            this.temp === "0"
                ? this.temp = val
                : this.temp += val;
            return this.temp
        };
        this.clearTemp = function () {
            this.temp = "0";
        };
        this.clearAll = function () {
            this.a = null;
            this.b = null;
            this.op = null;
            this.temp = "0";
            return this.temp
        }
        this.setValue = function (val) {
            if (this.a === null) {
                this.a = val;
            } else if (this.b === null) {
                this.b = val;
            } else {
                this.a = this.b;
                this.b = val;
            }
        };
        this.setOp = function (op) {
            this.op = op;
            this.setValue(Number(this.temp));
            this.clearTemp();
            return this.temp
        };
        this.calculate = function () {
            this.setValue(this.temp)
            if (this.a === null || this.b === null || this.op === null) 
                return 0;
            const a = this.a;
            const b = this.b;
            const op = this.op;
            this.a = null;
            this.b = null;
            this.op = null;
            switch (op) {
                case "add":
                    return a + b;
                case "sub":
                    return a - b;
                case "mul":
                    return a * b;
                case "div": // 소수 두번째 자리까지만 표시
                    return (a / b).toFixed(2);
            }
        };
    }
}
const calculator = new Calculator()

numButtons.forEach((numButton) => numButton.addEventListener('click', (e) => {
    displayDiv.innerText = calculator.setTemp(e.target.id);
}))

opButtons.forEach((opButton) => opButton.addEventListener('click', (e) => {
    displayDiv.innerText = calculator.setOp(e.target.id);
}))

calButton.addEventListener('click', () => {
    displayDiv.innerText = calculator.calculate();
})

clearButton.addEventListener('click', () => {
    displayDiv.innerText = calculator.clearAll();
})