// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
// Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Fade-in effect for project cards when scrolling
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease-out";
});

// FAQ Accordion Toggle (Only one open at a time)
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close all other items
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
        faq.querySelector(".icon").textContent = "+";
      }
    });

    // Toggle current item
    item.classList.toggle("active");
    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
