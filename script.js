const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

AOS.init();
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
