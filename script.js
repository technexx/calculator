const equationDisplay = document.querySelector("#display-text")
const numberButtonClass = document.querySelector(".number-buttons")
const numberButtonArray = ["7", "8", "9", "4", "5", "6", "1", "2" ,"3", "0", "."]

equationDisplay.textContent = "0"
let storedValue = "0"
let typeOfCalculation = "0"
let operatorSymbol = ""
let workingNumberArray = ["0"]

setStateButtonListeners()
setOperationButtonListeners()

for (let i=0; i<numberButtonArray.length; i++) {
    createNumberButtons(i)
}

function createNumberButtons(position) {
    const content = document.createElement("button")
    content.id = ("id", "button-" + numberButtonArray[position])
    content.textContent = numberButtonArray[position]
    content.style.height = "100px"
    content.style.width = "150px"

    if (position === 9) content.style.width = "300px"

    numberButtonClass.appendChild(content)

    setNumberButtonListeners(content, position)
}

function setNumberButtonListeners(element, position) {
    element.addEventListener("click", () => {
        if (equationDisplay.textContent == "0") {
            if (numberButtonArray[position] !== ".") {
                equationDisplay.textContent = ""
            }
       } else {
        if (numberButtonArray[position] === ".") {
            if (equationDisplay.textContent.includes(".")) {
                return
            }
        }
    }

    equationDisplay.textContent += numberButtonArray[position]

        if (!containsOperativeSymbol(equationDisplay.textContent)) {
            storedValue = equationDisplay.textContent
            workingNumberArray[0] = storedValue
        } else {
            //Todo: Splitting w/ "-" b0rks negative numbers
            let equationString = equationDisplay.textContent.toString()
            let splitString = equationString.split(" " + operatorSymbol + " ")

            storedValue = splitString[1]
            workingNumberArray[1] = storedValue
        }
    })
}

function setOperationButtonListeners() {
    let buttons = document.querySelectorAll(".right-buttons button")

    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            if (equationDisplay.textContent === "0") {
                return
            }

            if (workingNumberArray.length == 2) {
                performOperation()
            }

            if (!containsOperativeSymbol(equationDisplay.textContent)) {

            if (item.id === "divide-button") {
                equationDisplay.textContent  += " / "
                typeOfCalculation = "division"
                operatorSymbol = "/"
            }

            if (item.id === "multiply-button") {
                equationDisplay.textContent  += " * "
                typeOfCalculation = "multiplication"
                operatorSymbol = "*"
            }

            if (item.id === "subtract-button") {
                equationDisplay.textContent += " - "
                typeOfCalculation = "subtraction"
                operatorSymbol = "-"
            }

            if (item.id === "add-button") {
                equationDisplay.textContent  += " + "
                typeOfCalculation = "addition"
                operatorSymbol = "+"
            }
        }
        })
    });
}

//TODO: % button
//TODO: Allow option to switch operator before second number

function performOperation() {
    let answer = operationResult(typeOfCalculation, workingNumberArray[0], workingNumberArray[1])

    equationDisplay.textContent = answer

    operatorSymbol = ""
}

function operationResult(typeOfOperation, numOne, numTwo) {
    numOne = parseFloat(numOne)
    numTwo = parseFloat(numTwo)
    let answer = 0

    if (typeOfOperation == "division") {
        if (numTwo === 0) {
            workingNumberArray = [0, 0]
            return "y u deevyde by 0?"
        }
        answer = (numOne / numTwo)
    }
    if (typeOfOperation == "multiplication") {
        answer = (numOne * numTwo)
    }
    if (typeOfOperation == "subtraction") {
        answer = (numOne - numTwo)
    }
    if (typeOfOperation == "addition") {
        answer = (numOne + numTwo)
    }

    if (answer % 1 === 0) {
        answer = answer.toFixed(0)
    } else {
        answer = answer.toFixed(2)
    }

    return answer
}

function containsOperativeSymbol(equation) {
    return operatorSymbol !== ""
}

function setStateButtonListeners() {
    let buttons = document.querySelectorAll(".state-buttons button")

    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.id === "clear-button") {
                equationDisplay.textContent = 0
                workingNumberArray = []
            }
            if (item.id === "pos-neg-toggle-button") {
                if (equationDisplay.textContent !== 0 && workingNumberArray.length === 1) {
                    if (!equationDisplay.textContent.includes("-")) {
                        workingNumberArray[0] = "-"  + workingNumberArray[0]

                    } else {
                        workingNumberArray[0] = workingNumberArray[0].replace("-", "")
                    }
                }
                
                equationDisplay.textContent = workingNumberArray[0]
            }
            if (item.id === "percent-button") {
                if (equationDisplay.textContent !== 0 && !equationDisplay.textContent.includes("%") && !containsOperativeSymbol(equationDisplay.textContent)) {
                    equationDisplay.textContent = calculatePct(equationDisplay.textContent)
                } 
            }
        })
    });
}

function calculatePct(value) {
    let valueToReturn = parseFloat(value)
    (valueToReturn /= 100).toFixed(8)

    return (valueToReturn)
}