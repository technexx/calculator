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
            let equationString = equationDisplay.textContent.toString()
            let splitString = equationString.split(operatorSymbol)
            storedValue = splitString[1]
            workingNumberArray[1] = storedValue
        }
    })
}

//TODO: +/0 and % buttons
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
                console.log(equationDisplay.textContent)
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

function performOperation() {
    let answer = operationResult(typeOfCalculation, workingNumberArray[0], workingNumberArray[1])

    console.log(answer)

    if (answer.includes(".")) {
        answer = parseFloat(answer).toFixed(2)
    }

    workingNumberArray[0] = answer
    workingNumberArray.pop()
    equationDisplay.textContent = answer

    operatorSymbol = ""

}

function operationResult(typeOfOperation, numOne, numTwo) {
    numOne = parseInt(numOne)
    numTwo = parseInt(numTwo)

    if (typeOfOperation == "division") {
        return (numOne / numTwo).toString()
    }
    if (typeOfOperation == "multiplication") {
        return (numOne * numTwo).toString()
    }
    if (typeOfOperation == "subtraction") {
        return (numOne - numTwo).toString()
    }
    if (typeOfOperation == "addition") {
        return (numOne + numTwo).toString()
    }
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
            //Todo: Variable is changing from array to simple integer.
            if (item.id === "pos-neg-toggle-button") {
                if (equationDisplay.textContent !== 0 && workingNumberArray.length === 1) {
                    if (!equationDisplay.textContent.includes("-")) {
                        workingNumberArray[0] = "-"  + workingNumberArray[0]

                        console.log("with minus " + workingNumberArray)

                    } else {
                        workingNumberArray[0] = workingNumberArray[0].replace("-", "")
                    }
                }
                
                equationDisplay.textContent = workingNumberArray[0]
            }
            if (item.id === "percent-button") {
                if (equationDisplay.textContent !== 0 && !equationDisplay.textContent.includes("%") && !equationDisplay.textContent .includes("-")) equationDisplay.textContent  += " %"
            }
        })
    });
}