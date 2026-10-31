const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "☰";
});
document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector("#service");
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Formspree handles delivery. Replace the placeholder endpoint in index.html
// with the form ID from your free Formspree account before publishing.
