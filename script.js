const apage = document.getElementById("Art") // locate #Art from index.html \\ apage = index.html/#Art
function Apage() {
    window.location.href = "artpage.html" // add an action/function for/after click
}
apage.addEventListener("click", Apage) // wait for an event(click) , then add the function in


const hpage = document.getElementById("Home")
function Hpage() {
    window.location.href = "index.html"
}
hpage.addEventListener("click", Hpage)

const cvpage = document.getElementById("CV")
function CVpage() {
    window.location.href = "cvpage.html"
}
cvpage.addEventListener("click", CVpage)

const abpage = document.getElementById("About")
function ABpage() {
    window.location.href = "aboutpage.html"
}
abpage.addEventListener("click", ABpage)