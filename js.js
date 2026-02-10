const items = Array.from(document.querySelectorAll(".carousel-item"));
const total = items.length;
let currentIndex = 0;

const radius = 260;
const step = 360 / total;

function resetCarouselInline() {
  items.forEach((item) => {
    item.style.transform = "";
    item.style.opacity = "";
    item.classList.remove("active");
  });
}

function updateCarousel() {
  const isMobile = window.matchMedia("(max-width: 812px)").matches;
  if (isMobile) {
    resetCarouselInline();
    return;
  }

  items.forEach((item, index) => {
    const angle = (index - currentIndex) * step;
    item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

    const normalized = Math.abs(((angle + 180) % 360) - 180);
    const opacity = 1 - (normalized / 180) * 0.6;
    item.style.opacity = String(Math.max(0.25, opacity));

    item.classList.toggle("active", normalized < step / 2);
  });
}

document.querySelector(".next-btn")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
});

document.querySelector(".prev-btn")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + total) % total;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);
updateCarousel();

// burger menu
const burger = document.querySelector(".header-menu-mobile");
const menu = document.querySelector(".header-menu");
const icon = burger?.querySelector(".material-icons");

burger?.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (icon) icon.textContent = menu.classList.contains("active") ? "close" : "menu";
});

document.querySelectorAll(".header-menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    if (icon) icon.textContent = "menu";
  });
});
