// Script toggle menu on and off when clicking

const toggleMenuBtn = document.querySelector("[data-mobile-nav-btn]");
const navMenu = document.querySelector("[data-mobile-nav]");

const toggleMenu = function (event) {
   if (event.target.classList.contains("btn")) {
      console.log(event.target);
      toggleClass();
   } else if (event.target.classList.contains("fa-solid")) {
      console.log(event.target);
      toggleClass();
   } else if (event.target.classList.contains("fa-solid")) {
      console.log(event.target);
      toggleClass();
   }
};

function toggleClass() {
   return navMenu.classList.toggle("d-none");
}

toggleMenuBtn.addEventListener("click", toggleMenu);
// navMenu.addEventListener("pointerleave", toggleClass);
