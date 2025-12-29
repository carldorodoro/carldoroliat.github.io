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

/* =============================
   PROJECT IMAGE ZOOM + PAUSE
   ============================= */

const track = document.querySelector(".project-track");
const images = document.querySelectorAll(".project-track img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

function pauseScroll() {
  track.style.animationPlayState = "paused";
}

function resumeScroll() {
  track.style.animationPlayState = "running";
}

images.forEach(img => {
  img.addEventListener("click", () => {
    pauseScroll();
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  resumeScroll();
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    resumeScroll();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    resumeScroll();
  }
});