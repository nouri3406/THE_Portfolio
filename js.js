// carousel.js

// Sélectionne le carousel et ses éléments
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const total = items.length;
let currentIndex = 0;


// Fonction pour mettre à jour le carousel
function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    const offset = ((index - currentIndex + total) % total) - 2;
    item.style.transform = `rotateY(${offset * 30}deg) translateZ(${Math.abs(offset) === 0 ? 200 : 100}px)`;
    item.style.opacity = Math.abs(offset) === 0 ? 1 : 0.5;
    if (offset === 0) item.classList.add('active');
  });
}

// Boutons suivant et précédent
document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + total) % total;
  updateCarousel();
});

// Initialisation du carousel
updateCarousel();


const burger = document.querySelector(".header-menu-mobile");
const menu = document.querySelector(".header-menu");
const icon = burger.querySelector(".material-icons");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Change l’icône
  icon.textContent = menu.classList.contains("active") ? "close" : "menu";
});

// Fermer le menu si on clique sur un lien
document.querySelectorAll(".header-menu li a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    icon.textContent = "menu";
  });
});

