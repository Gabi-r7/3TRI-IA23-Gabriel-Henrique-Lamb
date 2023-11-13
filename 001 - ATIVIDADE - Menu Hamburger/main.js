window.addEventListener("scroll", ev => {
  const scroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const percent = (scroll / height) * 100
  document.body.style.setProperty("--_percent",  percent+"%")
  
})


// ----------------------------------------------------------------------------------

const btHamburger = document.querySelector(".menu-hamburger")
const mainMenu = document.querySelector("nav.main-menu")

btHamburger.addEventListener("click", () => {
  btHamburger.classList.toggle("opened")
  mainMenu.classList.toggle("opened")
})

// ----------------------------------------------------------------------------------

const btDialog = document.querySelector(".bt-dialog")
const btModal = document.querySelector(".bt-modal")
const dialog = document.querySelector("dialog")

btDialog.addEventListener("click", () => dialog.show())
btModal.addEventListener("click", () => dialog.showModal())

document.querySelectorAll("dialog button").forEach(
  bt => bt.addEventListener("click", () => dialog.close()))

// ----------------------------------------------------------------------------------

let meuBtn = document.querySelector('.meuBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    meuBtn.style.display = "block";
  } else {
    meuBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Isso faz a animação suave
  });
}

meuBtn.addEventListener("click", scrollToTop);
