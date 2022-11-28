import { deleteRequest } from "../../api/posts/request-type/delete-request.mjs";
import { updateRequest } from "../../api/posts/request-type/update-request.mjs";

export function postDropdownHandler(responseOk) {
   if (responseOk) {
      let postDropdownBtn = document.querySelector("#post-dropdown-btn");

      if (postDropdownBtn === null) {
         console.log("No Posts");
         postDropdownBtn = "";
      } else {
         postDropdownBtn.addEventListener("click", (event) => {
            const dropdownOption = event.target;
            if (dropdownOption.innerText === "Delete Post") {
               console.log(dropdownOption);
               deleteRequest(dropdownOption);
            }
            if (dropdownOption.innerText === "Edit Post") {
               const editPostForm = document.querySelector("#edit-post-form");
               editPostForm.classList.replace("d-none", "d-flex");

               // updateRequest(dropdownOption);
            }
         });
      }
   }
}
