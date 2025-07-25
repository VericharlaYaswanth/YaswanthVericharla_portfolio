// Typing effect
const typingText = "Full Stack Developer | Java | Spring Boot | Web Technologies | CyberSecurity and BlockChain Engineer";
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

// Dark Mode
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌓";
darkModeToggle.title = "Toggle Dark Mode";
darkModeToggle.className = "dark-toggle";
document.body.appendChild(darkModeToggle);

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll fade animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add("before-fade");
  observer.observe(section);
});
