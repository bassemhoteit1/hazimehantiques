// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Scroll animation on reveal (simple version)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".product-card, .about, .hero-content").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
