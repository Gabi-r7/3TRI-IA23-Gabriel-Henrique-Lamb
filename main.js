//------------- Troca de Cores ---------------------------------------------------------------------

const sections = document.querySelectorAll('section');
const h1eh2 = document.querySelectorAll('h1, h2');

window.addEventListener("load", function() {
  h1eh2.forEach(elemento => { elemento.style.background = 'blue'; });
  sections.forEach(section => { section.style.boxShadow = `0 0 40px blue`; });
});

window.addEventListener("scroll", ev => {
  const scroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = (scroll / height) * 100;
  alterarCor(percent);
  console.log(percent);

  sections.forEach(section => alterarCorBoxShadow(section));
  h1eh2.forEach(h1 => alterarBackground(h1));
  h1eh2.forEach(h2 => alterarBackground(h2));

});

let cor;
function alterarCor(percent) {

  if (percent < 25) {
    cor = 'blue';
  } else if (percent < 50) {
    cor = 'purple';
  } else if (percent < 75) {
    cor = 'green';
  } else {
    cor = 'red';
  }
}

function alterarBackground(elemento) {
  elemento.style.transition = 'background 0.7s ease-in-out';
  elemento.style.background = cor;
}

function alterarCorBoxShadow(elemento) {
  elemento.style.transition = 'box-shadow 0.7s ease-in-out';
  elemento.style.boxShadow = `0 0 40px ${cor}`;
}

// ------------------ Botão menu hamburger ----------------------------------------------------------------

const btHamburger = document.querySelector(".menu-hamburger");
const mainMenu = document.querySelector("nav.main-menu");
const main = document.querySelector("main");

btHamburger.addEventListener("click", () => {
  btHamburger.classList.toggle("opened");
  mainMenu.classList.toggle("opened");
});

main.addEventListener("click", () => {
  btHamburger.classList.remove("opened");
  mainMenu.classList.remove("opened");
});

// --------------- Botão volta ao topo-------------------------------------------------------------------

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
    behavior: "smooth"
  });
}

meuBtn.addEventListener("click", scrollToTop);
