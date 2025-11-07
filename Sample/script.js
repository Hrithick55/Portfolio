// ===== TYPEWRITER EFFECT =====
const typewriter = document.getElementById("typewriter");
const words = ["Hrithick", "a Full-Stack Developer", "Passionate about coding"];
let i = 0, j = 0, word = "", isDeleting = false;

function type() {
  word = words[i];
  typewriter.textContent = isDeleting ? word.substring(0, j--) : word.substring(0, j++);
  if (!isDeleting && j === word.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === -1) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, 100);
  }
}
type();

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ===== SCROLL REVEAL EFFECT =====
const revealElements = document.querySelectorAll(".project-card, .experience, .contact");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) el.classList.add("reveal");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== CONTACT FORM =====
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  form.reset();
});

// ======= ZOOM + FADE SCROLL EFFECT =======
const zoomSections = document.querySelectorAll("section");

function revealZoomFade() {
  zoomSections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100 && top > -section.clientHeight / 2) {
  section.classList.add("show");
} else {
  section.classList.remove("show");
}
  });
}

window.addEventListener("scroll", revealZoomFade);
revealZoomFade(); // trigger on page load

const cvBtn = document.querySelector(".cv-btn");
window.addEventListener("scroll", () => {
  const aboutTop = document.getElementById("about").getBoundingClientRect().top;
  if (aboutTop < window.innerHeight - 150) cvBtn.classList.add("show");
});
