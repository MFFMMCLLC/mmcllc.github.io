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
