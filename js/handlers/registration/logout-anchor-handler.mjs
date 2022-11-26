import { removeProfileFromStorage } from "../../storage/delete-stored-profile.mjs";

export function logoutAnchorAccount() {
   const desktopLogoutBtn = document.querySelector("#desktop-logout-anchor");
   const mobileLogoutBtn = document.querySelector("#mobile-logout-anchor");
   desktopLogoutBtn.addEventListener("click", () => {
      removeProfileFromStorage();
   });

   mobileLogoutBtn.addEventListener("click", () => {
      removeProfileFromStorage();
   });
}
