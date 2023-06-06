
for (let i=0; i<4; i++) {
    createValueButtons(i)
}

//Do we want to store buttons as objects in array? It would allow us to assign values to each.

function createValueButtons(position) {
    const leftButtonsContainer = document.querySelector(".left-buttons")

    const content = document.createElement("div")
    content.classList.add("value-button-row-" +i)
    leftButtonsContainer.appendChild(content)
}