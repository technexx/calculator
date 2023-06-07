const equationDisplay = document.querySelector(".display")
const leftButtonsContainer = document.querySelector(".number-buttons")
const numberButtonArray = ["7", "8", "9", "4", "5", "6", "1", "2" ,"3", "0", "."]

let displayValue = "0"
equationDisplay.innerText = displayValue

let typeOfCalculation = "0"
let workingNumberArray = ["0", "0"]
let equationArray = [0, 0, 0]

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

    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            console.log(buttons[i].id)

            if ((equationArray[0] === 0) || (equationArray[2] === 0)) {
                return
            }

            if (buttons[i].id === "divide-button") {
                equationDisplay += " / "
                typeOfCalculation = "division"
            }

            if (buttons[i].id === "multiply-button") {
                equationDisplay += " * "
                typeOfCalculation = "multiplication"
            }

            if (buttons[i].id === "subtract-button") {
                displaequationDisplayyValue += " - "
                typeOfCalculation = "subtraction"
            }
            if (buttons[i].id === "add-button") {
                equationDisplay += " + "
                typeOfCalculation = "addition"
            }
            if (i.id === "equals-button") {
                workingNumberArray[0]
            }

            display.innerText = displayValue
            equationArray[1] = displayValue
        })
    }
}

function add(numOne, numTwo) { return numOne + numTwo };

function subtract(numOne, numTwo) { return numOne - numTwo};

function multiply(numOne, numTwo) { return numOne * numTwo };

function divide(numOne, numTwo) { return numOne / numTwo };