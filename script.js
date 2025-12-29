const toggleBtn = document.getElementById("themeToggle");
const iconSpan = toggleBtn.querySelector(".icon");
const textSpan = toggleBtn.querySelector(".text");
const htmlEl = document.documentElement;

// Theme toggle
function setTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  if (theme === "dark") {
    iconSpan.textContent = "🌙";
    textSpan.textContent = "Dark Mode";
  } else {
    iconSpan.textContent = "☀️";
    textSpan.textContent = "Light Mode";
  }
}

toggleBtn.addEventListener("click", () => {
  const next = htmlEl.getAttribute("data-theme") === "light" ? "dark" : "light";
  setTheme(next);
});

setTheme("light");

// Scroll-in animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
