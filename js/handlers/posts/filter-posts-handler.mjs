import { saveSessionItem } from "../../storage/session-storage.mjs";

/**
 * Saves the filter-option-name to the sessionStorage when the user clicks on a option in the filter-menu
 * @export
 * @module filterPostHandler
 */
export function filterPostHandler() {
   const filterDropdown = document.querySelector(".dropdown-menu");
   filterDropdown.addEventListener("click", (event) => {
      const filterDropdownName = event.target.innerText;
      saveSessionItem("filterOptionName", filterDropdownName);
      window.location.reload();
   });
}
