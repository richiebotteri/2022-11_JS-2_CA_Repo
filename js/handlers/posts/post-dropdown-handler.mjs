import { deleteRequest } from "../../api/api-requests/request-type/delete-request.mjs";
import { updateRequest } from "../../api/api-requests/request-type/update-request.mjs";
import { validateInputs } from "../../form/validatedInput.mjs";
import { closeEditPostHandler } from "./close-edit-post-handler.mjs";

export function postDropdownHandler(responseOk) {
   if (responseOk) {
      let postDropdownBtn = document.querySelector("#post-dropdown-btn");

      if (postDropdownBtn === null) {
         postDropdownBtn = "";
      } else {
         postDropdownBtn.addEventListener("click", (event) => {
            const dropdownOption = event.target;
            if (dropdownOption.innerText === "Delete Post") {
               deleteRequest(dropdownOption);
            }
            if (dropdownOption.innerText === "Edit Post") {
               const editPostForm = document.querySelector("#edit-post-form");
               editPostForm.classList.replace("d-none", "d-flex");
               closeEditPostHandler(editPostForm);

               editPostForm.addEventListener("submit", (event) => {
                  event.preventDefault();

                  const editFormSubmit = event.target;
                  const { tags } = editFormSubmit;
                  const createPostArray = [];
                  createPostArray.push(tags);
                  const isValid = validateInputs(createPostArray);

                  if (isValid) {
                     console.log("here");
                     updateRequest(editFormSubmit, dropdownOption);
                  } else {
                     console.log(isValid);
                  }
               });
            }
         });
      }
   }
}
