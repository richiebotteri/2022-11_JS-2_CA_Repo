import { updateRequest } from "../../api/api-requests/request-type/update-request.mjs";
import { validateInputs } from "../../form/validate-Input.mjs";

/**
 * Gets data typed inside the edit-form inputs when the form gets submitted.
 * @export
 * @module editFormHandler
 * @description
 * It gets the html edit-form and than listens for a submit event.
 *
 * When the form is submitted the value of the form-inputs
 * gets validated according to pattern set on the inputs
 *
 * The validation-function return a boolean of true or false depending on the results.
 *
 * if form is valid (true), the submit-event will be sent to the updateRequest function to be renders for API delivery.
 */
export function editFormHandler(editForm, editBtn) {
   editForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const editFormSubmit = event.target;
      const { tags } = editFormSubmit;
      const createPostArray = [];
      createPostArray.push(tags);
      const isValid = validateInputs(createPostArray);

      if (isValid) {
         updateRequest(editFormSubmit, editBtn);
         return;
      }
   });
}
