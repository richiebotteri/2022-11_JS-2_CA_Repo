import { deleteRequest } from "../../api/posts/request-type/delete-request.mjs";
import { updateRequest } from "../../api/posts/request-type/update-request.mjs";

export function postDropdownHandler(responseOk) {
   if (responseOk) {
      const postDropdownBtn = document.querySelector("#post-dropdown-btn");
      postDropdownBtn.addEventListener("click", (event) => {
         const dropdownOption = event.target;
         if (dropdownOption.id === "delete-post-btn") {
            deleteRequest(dropdownOption);
         }

         if (dropdownOption.id === "edit-post-btn") {
            updateRequest(dropdownOption);
         }
      });
   }
}
