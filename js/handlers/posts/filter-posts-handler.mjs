import { deleteSessionItem, saveSessionItem } from "../../storage/session-storage.mjs";

export function filterPostHandler() {
   const filterDropdown = document.querySelector(".dropdown-menu");
   filterDropdown.addEventListener("click", (event) => {
      const filterDropdownName = event.target.innerText;
      saveSessionItem("filterOptionName", filterDropdownName);
      deleteSessionItem("searchInputValue");
      window.location.reload();
   });
}
