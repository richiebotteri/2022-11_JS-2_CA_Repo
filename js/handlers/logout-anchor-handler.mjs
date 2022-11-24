import { removeProfileFromStorage } from "../storage/delete-stored-profile.mjs";

export function logoutAccount() {
   const desktopNav = document.querySelector("#desktop-logout-anchor");
   const mobileNav = document.querySelector("#mobile-logout-anchor");

   desktopNav.addEventListener("click", () => {
      removeProfileFromStorage();
   });

   mobileNav.addEventListener("click", () => {
      removeProfileFromStorage();
   });
}
