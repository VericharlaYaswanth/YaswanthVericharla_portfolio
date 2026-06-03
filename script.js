// ==========================
// Typing Effect
// ==========================

const typingText =
  "Full Stack Developer | Java | Spring Boot | Cybersecurity Enthusiast | AI Explorer";

const subtitle = document.getElementById("typing-text");

if (subtitle) {
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
}

// ==========================
// Dark Mode Toggle
// ==========================

const darkModeToggle = document.createElement("button");

darkModeToggle.innerHTML = "🌓";
darkModeToggle.title = "Toggle Dark Mode";
darkModeToggle.className = "dark-toggle";

document.body.appendChild(darkModeToggle);

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark")
      ? "dark"
      : "light"
  );
});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ==========================
// Fade In Animation
// ==========================

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  {
    threshold: 0.1
  }
);

document
  .querySelectorAll(
    "section, .project-card, .achievement-card, .card"
  )
  .forEach(item => {
    item.classList.add("before-fade");
    observer.observe(item);
  });

// ==========================
// Active Navbar Highlight
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }
  });
});

// ==========================
// Achievement Counter
// ==========================

const counters =
  document.querySelectorAll(
    ".achievement-card h3"
  );

const counterObserver =
  new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;

          const originalText =
            counter.textContent;

          const numericValue =
            parseFloat(
              originalText.replace("+", "")
            );

          let count = 0;

          const increment =
            numericValue / 50;

          function updateCounter() {
            if (
              count < numericValue
            ) {
              count += increment;

              if (
                numericValue % 1 !== 0
              ) {
                counter.textContent =
                  count.toFixed(2);
              } else {
                counter.textContent =
                  Math.ceil(count);
              }

              requestAnimationFrame(
                updateCounter
              );
            } else {
              counter.textContent =
                originalText;
            }
          }

          updateCounter();

          counterObserver.unobserve(
            counter
          );
        }
      });
    },
    {
      threshold: 0.5
    }
  );

counters.forEach(counter => {
  counterObserver.observe(counter);
});

// ==========================
// Back To Top Button
// ==========================

const topButton =
  document.createElement("button");

topButton.innerHTML = "⬆";
topButton.className =
  "back-to-top";

document.body.appendChild(
  topButton
);

window.addEventListener(
  "scroll",
  () => {
    if (
      window.scrollY > 400
    ) {
      topButton.style.display =
        "block";
    } else {
      topButton.style.display =
        "none";
    }
  }
);

topButton.addEventListener(
  "click",
  () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);

// ==========================
// Contact Form
// ==========================

const form =
  document.querySelector("form");

if (form) {
  form.addEventListener(
    "submit",
    function (e) {
      e.preventDefault();

      alert(
        "Thank you for contacting me! I will get back to you soon."
      );

      form.reset();
    }
  );
}

// ==========================
// Footer Year Auto Update
// ==========================

const footerText =
  document.querySelector(
    "footer p:last-child"
  );

if (footerText) {
  footerText.innerHTML =
    `© ${new Date().getFullYear()} Yaswanth Vericharla. All Rights Reserved.`;
}
