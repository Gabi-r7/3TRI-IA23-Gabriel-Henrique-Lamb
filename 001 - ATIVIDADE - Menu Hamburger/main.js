const btHamburger = document.querySelector(".bt-hamburger-toggle")
const mainMenu = document.querySelector("nav.main-menu")

btHamburger.addEventListener("click", () => {
    btHamburger.classList.toggle("opened")
    mainMenu.classList.toggle("opened")
})