import { saveSessionItem } from "../../storage/session-storage.mjs";

export function searchInputHandler() {
   const searchForm = document.querySelector("[data-search-form]");
   searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchInputValue = searchForm.search.value;
      saveSessionItem("searchInputValue", searchInputValue);
      window.location.reload();
   });
}
