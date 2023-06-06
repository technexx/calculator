const leftButtonsContainer = document.querySelector(".number-buttons")

let numberArray = [7, 8, 9, 4, 5, 6, 1, 2 ,3, 0, "."]

for (let i=0; i<numberArray.length; i++) {
    createValueButtons(i)
}

function createValueButtons(position) {
    const content = document.createElement("button")
    content.id = ("id", "button-" + numberArray[position])
    content.value = numberArray[position]
    content.style.height = "100px"
    content.style.width = "150px"

    leftButtonsContainer.appendChild(content)
}