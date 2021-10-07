let myNumbers = document.getElementsByClassName("nums")
let myOperators = document.getElementsByClassName("operators")


// ------------------------------------------------------------------->



function numbersInput() {
    for (let i = 0; i < myNumbers.length; i++) {
        myNumbers[i].onclick = () => {
            numbersDisplay.innerText += myNumbers[i].value
        }
    }
}
numbersInput()

let input = 0;
let input2 = 0;
let sum = 0;
function operators(operator) {
    input = Number(numbersDisplay.innerText);
    switch (operator) {
        case "+":
            numbersDisplay.innerText = " "
            calculate.onclick = () => {
                input2 = Number(numbersDisplay.innerText)
                sum = input += input2
                numbersDisplay.innerText = sum
            }
            break
        case "-":
            numbersDisplay.innerText = " "
            calculate.onclick = () => {
                input2 = Number(numbersDisplay.innerText)
                sum = input - input2
                numbersDisplay.innerText = sum
            }
            break
        case "*":
            numbersDisplay.innerText = " "
            calculate.onclick = () => {
                input2 = Number(numbersDisplay.innerText)
                sum = input * input2
                numbersDisplay.innerText = sum
            }
            break
        case "/":
            numbersDisplay.innerText = " "
            calculate.onclick = () => {
                input2 = Number(numbersDisplay.innerText)
                sum = input / input2
                numbersDisplay.innerText = sum
            }
            break
        default:
            numbersDisplay.innerText = " "
            input = 0;
            input2 = 0;
            sum = 0;
            break;
    }
}
// ----------------------------------------------------------------------->


// OperatorSssS----->

for (let i = 0; i < myOperators.length; i++) {
    myOperators[i].onclick = () => {
        operators(myOperators[i].value)
    }
}
// OperatorSssS----->

