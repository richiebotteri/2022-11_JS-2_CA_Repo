/**
 * Toggles viewing mobile-nav when clicking on the hamburger-menu button.
 * @export
 * @module toggleMobileNav
 */
export function toggleMobileNav() {
   const toggleMenuBtn = document.querySelector("[data-mobile-nav-btn]");

   const navMenu = document.querySelector("[data-mobile-nav]");

   const toggleMenu = function (event) {
      if (event.target.classList.contains("btn")) {
         toggleClass();
      } else if (event.target.classList.contains("fa-solid")) {
         toggleClass();
      } else if (event.target.classList.contains("fa-solid")) {
         toggleClass();
      }
   };

   function toggleClass() {
      return navMenu.classList.toggle("d-none");
   }

   if (window.location.pathname !== "/post/") {
      toggleMenuBtn.addEventListener("click", toggleMenu);
   }
}
