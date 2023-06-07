const display = document.querySelector(".display")
const leftButtonsContainer = document.querySelector(".number-buttons")
const numberButtonArray = [7, 8, 9, 4, 5, 6, 1, 2 ,3, 0, "."]

let displayValue = "0"
display.innerText = displayValue

let typeOfCalculation = ""
let workingNumberArray = [0, 0]

setManipulationButtonListeners()

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
        displayValue += numberButtonArray[position]
        display.innerText = displayValue
    })
}

function setManipulationButtonListeners() {
    // let buttons = document.querySelector(".right-buttons").children
    let buttons = document.querySelectorAll(".right-buttons button")
    console.log(buttons)

    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            console.log(buttons[i].id)

            if (buttons[i].id === "divide-button") {
                displayValue += " / "
                typeOfCalculation = "division"
            }

            if (buttons[i].id === "multiply-button") {
                displayValue += " * "
                typeOfCalculation = "multiplication"
            }

            if (buttons[i].id === "subtract-button") {
                displayValue += " - "
                typeOfCalculation = "subtraction"
            }
            if (buttons[i].id === "add-button") {
                displayValue += " + "
                typeOfCalculation = "addition"
            }
            if (i.id === "equals-button") {
            }

            display.innerText = displayValue
        })
    }
}

function add(numOne, numTwo) { return numOne + numTwo };

function subtract(numOne, numTwo) { return numOne - numTwo};

function multiply(numOne, numTwo) { return numOne * numTwo };

function divide(numOne, numTwo) { return numOne / numTwo };