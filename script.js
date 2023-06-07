const equationDisplay = document.querySelector(".display")
const leftButtonsContainer = document.querySelector(".number-buttons")
const numberButtonArray = ["7", "8", "9", "4", "5", "6", "1", "2" ,"3", "0", "."]

equationDisplay.innerText = "0"
let storedValue = "0"
let typeOfCalculation = "0"
let operatorSymbol = ""
let workingNumberArray = ["0", "0"]

setStateButtonListeners()
setOperationButtonListeners()

for (let i=0; i<numberButtonArray.length; i++) {
    createValueButtons(i)
}

function createValueButtons(position) {
    const content = document.createElement("button")
    content.id = ("id", "button-" + numberButtonArray[position])
    content.textContent = numberButtonArray[position]
    content.style.height = "100px"
    content.style.width = "150px"

    if (position === 9) content.style.width = "300px"

    leftButtonsContainer.appendChild(content)

    setNumberButtonListeners(content, position)
}

function setNumberButtonListeners(element, position) {
    element.addEventListener("click", () => {
        // console.log(equationDisplay.innerText)

        if (equationDisplay.innerText == "0") {
            if (numberButtonArray[position] !== ".") {
                equationDisplay.innerText = ""
            }
    } else {
        if (numberButtonArray[position] === ".") {
            if (equationDisplay.innerText.includes(".")) {
                return
            }
        }
    }

    equationDisplay.innerText += numberButtonArray[position]

        if (!containsOperative(equationDisplay.innerText)) {
            storedValue = equationDisplay.innerText
            workingNumberArray[0] = storedValue
        } else {
                       let equationString = equationDisplay.innerText.toString()
            let splitString = equationString.split(operatorSymbol)
            storedValue = splitString[1]

            console.log(equationString)
            console.log(storedValue) 
        }
    })
}

function setOperationButtonListeners() {
    let buttons = document.querySelectorAll(".right-buttons button")
    console.log(buttons)

    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            if (containsOperative(equationDisplay.innerText) || equationDisplay.innerText === "0") {
                return
            }

            if (item.id === "divide-button") {
                equationDisplay.innerText  += " / "
                typeOfCalculation = "division"
                operatorSymbol = "/"
            }

            if (item.id === "multiply-button") {
                equationDisplay.innerText  += " * "
                typeOfCalculation = "multiplication"
                operatorSymbol = "*"
            }

            if (item.id === "subtract-button") {
                equationDisplay.innerText += " - "
                typeOfCalculation = "subtraction"
                operatorSymbol = "-"
            }
            if (item.id === "add-button") {
                equationDisplay.innerText  += " + "
                typeOfCalculation = "addition"
                operatorSymbol = "+"
            }
            
            if (item.id === "equals-button") {
                if (equationDisplay.innerText !== 0) {
                    workingNumberArray[1] = displayValue
                }
            }
        })
    });
}

function setStateButtonListeners() {
    let buttons = document.querySelectorAll(".state-buttons button")

    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.id === "clear-button") {
                equationDisplay.innerText = 0
            }
            if (item.id === "pos-neg-toggle-button") {
                if (equationDisplay.innerText !== 0 && !equationDisplay.innerText.includes("-")) equationDisplay.innerText = "- " + equationDisplay.innerText;
            }
            if (item.id === "percent-button") {
                if (equationDisplay.innerText !== 0 && !equationDisplay.innerText.includes("%") && !equationDisplay.innerText .includes("-")) equationDisplay.innerText  += " %"
            }
            
        })
    });
}

function add(numOne, numTwo) { return numOne + numTwo };

function subtract(numOne, numTwo) { return numOne - numTwo};

function multiply(numOne, numTwo) { return numOne * numTwo };

function divide(numOne, numTwo) { return numOne / numTwo };

function containsOperative(equation) {
    return (equation.includes("-") || equation.includes("+") || equation.includes("*", equation.includes("/")))
}