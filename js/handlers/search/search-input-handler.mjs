import { validateInputs } from "../../form/validatedInput.mjs";
import { saveSessionItem } from "../../storage/session-storage.mjs";

export function searchInputHandler() {
   const searchForm = document.querySelector("[data-search-form]");
   searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const searchInputArray = [];
      const { search } = event.target;
      searchInputArray.push(search);
      const isValid = validateInputs(searchInputArray);

      if (isValid) {
         const searchInputValue = search.value;
         saveSessionItem("searchInputValue", searchInputValue);
         window.location.reload();
      } else {
         console.log("form not valid");
      }
   });
}
