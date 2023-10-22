// referencing DOM elements
const form = document.getElementById("form")
const inputLinks = document.getElementById("inputLinks")

function consoleMessage() {
    console.log(inputLinks.value)
}

form.addEventListener("submit", e => {
    e.preventDefault()
    consoleMessage()
})

