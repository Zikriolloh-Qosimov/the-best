document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully 🚀");

  // Example: small animation when user hovers on project cards
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.background = "#eaf6ff";
    });
    card.addEventListener("mouseleave", () => {
      card.style.background = "#f9f9f9";
    });
  });
});
