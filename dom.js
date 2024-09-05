
function flowEvents(e) {
    console.log(`Hi ${this}, origin ${e.target.className}`)
}

document.addEventListener("click", (e) => {
    console.log("Click ", e.target)

    if(e.target.matches(".flow-events div")) {
        flowEvents(e)
    }

    if (e.target.matches(".flow-events a")) {
        alert("Hello events")
        e.preventDefault()
    }
})

console.log(window.alert())