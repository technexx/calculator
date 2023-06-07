const equationDisplay = document.querySelector(".display")
const leftButtonsContainer = document.querySelector(".number-buttons")
const numberButtonArray = ["7", "8", "9", "4", "5", "6", "1", "2" ,"3", "0", "."]

let displayValue = "0"
equationDisplay.innerText = displayValue

let typeOfCalculation = "0"
let workingNumberArray = ["0", "0"]
let equationArray = [0, 0, 0]

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

function setStateButtonListeners() {
    let buttons = document.querySelectorAll(".state-buttons button")

    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.id === "clear-button") {
                displayValue = 0
                console.log("clear!")
            }
            if (item.id === "pos-neg-toggle-button") {
                if (displayValue !== 0) displayValue = "- " + displayValue
            }
            if (item.id === "percent-button") {
                if (displayValue !== 0) displayValue += " %"
            }
            
            equationDisplay.innerText = displayValue
        })
    });
}

function setNumberButtonListeners(element, position) {
    element.addEventListener("click", () => {
        console.log(displayValue)

        if (displayValue == "0") {
            if (numberButtonArray[position] !== ".") {
                displayValue = ""
            }
    } else {
        if (numberButtonArray[position] === ".") {
            if (displayValue.includes(".")) {
                return
            }
        }
    }
        displayValue += numberButtonArray[position]
        equationDisplay.innerText = displayValue
    })
}

function setOperationButtonListeners() {
    let buttons = document.querySelectorAll(".right-buttons button")
    console.log(buttons)

    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            //Stops our operation buttons
            if ((equationArray[0] === 0) || (equationArray[2] === 0)) {
                return
            }

            console.log(item.id)

            if (item.id === "divide-button") {
                displayValue += " / "
                typeOfCalculation = "division"
            }

            if (item.id === "multiply-button") {
                displayValue += " * "
                typeOfCalculation = "multiplication"
            }

            if (item.id === "subtract-button") {
                displayValue += " - "
                typeOfCalculation = "subtraction"
            }
            if (item.id === "add-button") {
                displayValue += " + "
                typeOfCalculation = "addition"
            }
            if (item.id === "equals-button") {
                workingNumberArray[0]
            }

            equationDisplay.innerText = displayValue
            equationArray[1] = displayValue
        })
    });
}

function add(numOne, numTwo) { return numOne + numTwo };

function subtract(numOne, numTwo) { return numOne - numTwo};

function multiply(numOne, numTwo) { return numOne * numTwo };

function divide(numOne, numTwo) { return numOne / numTwo };