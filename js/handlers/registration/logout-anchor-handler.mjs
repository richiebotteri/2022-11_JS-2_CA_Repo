import { removeProfileFromStorage } from "../../storage/delete-stored-profile.mjs";

/**
 * Logs out user by removing profile data stored in the localStorage to
 * prevent access, when user clicks on logout button.
 * @export
 * @module logoutAccount
 * @description
 * It gets the html logout buttons both on desktop and mobile navigation.
 *
 * It than listens for a click, and trigger the removeProfileFromStorage
 * function to delete the data
 */

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
