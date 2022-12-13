import { createRequest } from "../../api/api-requests/request-type/create-request.mjs";
import { validateInputs } from "../../form/validate-Input.mjs";

/**
 * Gets data typed inside the create-post-form inputs when the form gets submitted.
 * @export
 * @module createPostHandler
 * @description
 * It gets the html create-form-element and than listens for a submit event.
 *
 * When the form is submitted the value of the form-inputs
 * gets validated according to pattern set on the inputs
 *
 * The validation-function return a boolean of true or false depending on the results.
 *
 * if form is valid (true), the submit-event will be sent to the createRequest function to be renders for API delivery.
 */
export function createPostHandler() {
   const createPostForm = document.querySelector("#create-post-form");
   createPostForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const createPostArray = [];
      const { title, textarea, tags } = event.target;
      createPostArray.push(title, textarea, tags);
      const isValid = validateInputs(createPostArray);

      if (isValid) {
         createRequest(event);
      } else {
         console.log("form not valid");
      }
   });
}
