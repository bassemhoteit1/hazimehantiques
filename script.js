// Sidebar toggle functionality
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});
