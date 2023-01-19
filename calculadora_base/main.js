let firstOperator = "";
let secondOperator = "";
let operator = "";

const result = document.getElementById("result")
const resetButton = document.getElementById("reset")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equal = document.getElementById("equal")
const reset = document.getElementById("reset")

const onClickReset = () => result.textContent = ""
const onClickNumbers = (e) => result.textContent = result.textContent + e.target.value
const onClickOperators = (e) => {
    firstOperator = result.textContent
    operator = e.target.value
    onClickReset()
}
const onClickEqual = () => {
    let total = 0
    secondOperator = result.textContent
    switch (operator) {
        case "+":
            total = parseFloat(firstOperator) + parseFloat(secondOperator)
            break;
        case "-":
            total = parseFloat(firstOperator) - parseFloat(secondOperator)
            break;
        case "*":
            total = parseFloat(firstOperator) * parseFloat(secondOperator)
            break;
        case "/":
            total = parseFloat(firstOperator) / parseFloat(secondOperator)
        default:
            break;
    } 
    result.textContent = total
}

reset.addEventListener("click", onClickReset)
equal.addEventListener("click", onClickEqual)
numbers.forEach((number) => number.addEventListener("click", onClickNumbers))
operators.forEach((operator) => operator.addEventListener("click", onClickOperators))