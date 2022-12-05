import { updateRequest } from "../../api/api-requests/request-type/update-request.mjs";
import { validateInputs } from "../../form/validatedInput.mjs";

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
      } else {
         console.log(isValid);
      }
   });
}
