import { deleteRequest } from "../../api/api-requests/request-type/delete-request.mjs";
import { closeEditPostHandler } from "./close-edit-post-handler.mjs";
import { editFormHandler } from "./edit-form-handler.mjs";

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
               const editBtn = dropdownOption;
               const editPostForm = document.querySelector("#edit-post-form");
               editPostForm.classList.replace("d-none", "d-flex");
               closeEditPostHandler(editPostForm);
               editFormHandler(editPostForm, editBtn);
            }
         });
      }
   }
}
