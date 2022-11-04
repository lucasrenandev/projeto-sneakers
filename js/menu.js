const navegation = document.querySelector("nav ul")
const menu = document.querySelector(".menu-icon")
const menuImage = document.querySelector(".menu-icon img")

menu.addEventListener("click", () => {
    menuActive()
    menuShow()
})

function menuActive() {
    if(navegation.classList.contains("active")) {
        navegation.classList.remove("active")
    }
    else {
        navegation.classList.add("active")
    }
}

function menuShow() {
    if(menuImage.getAttribute("src") === "images/icon-menu.svg") {
        menuImage.setAttribute("src", "images/icon-close.svg")
    }
    else {
        menuImage.setAttribute("src", "images/icon-menu.svg")
    }
}