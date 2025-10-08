// ===== AUTO-UPDATE YEAR =====
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ===== MOBILE MENU TOGGLE =====
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("header nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  }
});

// ===== HIDE HEADER ON SCROLL DOWN / SHOW ON SCROLL UP =====
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scrolling down → hide header
    header.style.top = `-${header.offsetHeight}px`;
  } else {
    // Scrolling up or near top → show header
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
