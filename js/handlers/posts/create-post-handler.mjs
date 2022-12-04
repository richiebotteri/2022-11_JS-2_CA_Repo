import { createRequest } from "../../api/post/request-type/create-request.mjs";
import { validateInputs } from "../../form-validation/validatedInput.mjs";

export function createPostHandler() {
   const createPostForm = document.querySelector("#create-post-form");
   createPostForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const createPostArray = [];
      const { title, textarea } = event.target;
      createPostArray.push(title, textarea);
      const isValid = validateInputs(createPostArray);

      if (isValid) {
         console.log("here");
         createRequest(event);
      } else {
         console.log("form not valid");
      }
   });
}
