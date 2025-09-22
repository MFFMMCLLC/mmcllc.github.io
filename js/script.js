// Auto-update year for all pages
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  }
});

// Hide header/logo until top of page
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (!header) return;

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    // Scrolled down → hide header/logo
    header.style.top = `-${header.offsetHeight}px`;
  } else {
    // At the top → show header/logo
    header.style.top = "0";
  }
});
