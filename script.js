const display = document.querySelector(".display")
const leftButtonsContainer = document.querySelector(".number-buttons")
const numberArray = [7, 8, 9, 4, 5, 6, 1, 2 ,3, 0, "."]

let displayValue = "0"
display.innerText = displayValue

for (let i=0; i<numberArray.length; i++) {
    createValueButtons(i)
}

function createValueButtons(position) {
    const content = document.createElement("button")
    content.id = ("id", "button-" + numberArray[position])
    content.textContent = numberArray[position]
    content.style.height = "100px"
    content.style.width = "150px"

    if (position === 9) content.style.width = "300px"

    leftButtonsContainer.appendChild(content)

    setButtonListeners(content, position)
}

function setButtonListeners(element, position) {
    element.addEventListener("click", () => {
        displayValue += numberArray[position]
        display.innerText = displayValue
    })
}


