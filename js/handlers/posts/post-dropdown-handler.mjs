import { deleteRequest } from "../../api/api-requests/request-type/delete-request.mjs";
import { closeEditPostHandler } from "./close-edit-post-handler.mjs";
import { editFormHandler } from "./edit-form-handler.mjs";

/**
 * listens for clicks in the single-post dropdown-menu.
 * @export
 * @module
 * @description
 * if delete gets clicked it calls the deleteRequest function sending the delete-button element as param
 *
 * if edit button gets clicked the post-edit-form gets displayed, and the edit-form & edit-button element get sent as params to the editFormHandler function to handle the data inside the form.
 */
export function postDropdownHandler() {
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
