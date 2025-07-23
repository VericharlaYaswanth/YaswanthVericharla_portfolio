// script.js

// 1. Typing animation
const typingText = "Full Stack Developer | Java | Spring Boot | Web Technologies";
const subtitle = document.querySelector("header p");

let index = 0;
function type() {
  if (index < typingText.length) {
    subtitle.textContent += typingText.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
subtitle.textContent = "";
type();

// 2. Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌓";
darkModeToggle.title = "Toggle Dark Mode";
darkModeToggle.className = "dark-toggle";
document.body.appendChild(darkModeToggle);

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// 3. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 4. Fade-in on Scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
  section.classList.add("before-fade");
  observer.observe(section);
});
