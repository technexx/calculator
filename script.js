const equationDisplay = document.querySelector(".display")
const leftButtonsContainer = document.querySelector(".number-buttons")
const numberButtonArray = ["7", "8", "9", "4", "5", "6", "1", "2" ,"3", "0", "."]

let storedValue = "0"
let typeOfCalculation = "0"
let workingNumberArray = ["0", "0"]

let PRE_OPERATION = 0
let MID_OPERATION = 1
let POST_OPERATION = 2
let operationState = 0

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
        console.log(equationDisplay.innerText)

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

        if (operationState == PRE_OPERATION) {
            storedValue = equationDisplay.innerText
            workingNumberArray[0] = storedValue
        }
    })
}

function setOperationButtonListeners() {
    let buttons = document.querySelectorAll(".right-buttons button")
    console.log(buttons)

    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            //Stops our operation buttons
            if (operationState === PRE_OPERATION || operationState === MID_OPERATION) {
                return
            }

            if (item.id === "divide-button") {
                equationDisplay.innerText  += " / "
                typeOfCalculation = "division"
            }

            if (item.id === "multiply-button") {
                equationDisplay.innerText  += " * "
                typeOfCalculation = "multiplication"
            }

            if (item.id === "subtract-button") {
                equationDisplay.innerText += " - "
                typeOfCalculation = "subtraction"
            }
            if (item.id === "add-button") {
                equationDisplay.innerText  += " + "
                typeOfCalculation = "addition"
            }
            
            operationState === MID_OPERATION
            if (item.id === "equals-button") {
                if (equationDisplay.innerText !== 0) {
                    operationState === POST_OPERATION
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
                console.log("clear!")
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