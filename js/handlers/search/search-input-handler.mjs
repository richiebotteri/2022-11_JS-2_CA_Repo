import { validateInputs } from "../../form/validate-Input.mjs";
import { saveSessionItem } from "../../storage/session-storage.mjs";

/**
 * Gets data typed inside the search-input when the form gets submitted.
 * @export
 * @module searchInputHandler
 * @description
 * It gets the html search-form and listens for a submit event.
 *
 * When the form is submitted the search input value
 * gets validated according to pattern set on the input
 *
 * The validation-function return a boolean of true or false depending on the results.
 *
 * if form is valid the search value-input will be stored in the sessionStorage, and picked up in the scrollToView function to scroll the page to the location of the searched post.
 */
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
