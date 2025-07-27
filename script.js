// ✅ Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Light/Dark Mode Toggle
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
  });

  // ✨ Pop Effect on Click for Header Elements
  const clickableText = document.querySelectorAll("nav a, header h1, #modeToggle");
  clickableText.forEach(el => {
    el.addEventListener("click", (e) => {
      e.target.classList.add("pop-effect");
      setTimeout(() => {
        e.target.classList.remove("pop-effect");
      }, 300);
    });
  });

  // 🧚 Scroll Reveal Effect
  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  });
});
