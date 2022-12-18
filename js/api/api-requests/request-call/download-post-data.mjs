import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { toggleComments } from "../../../handlers/posts/comments-handler.mjs";
import { postDropdownHandler } from "../../../handlers/posts/post-dropdown-handler.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";
import { deleteSessionItem, loadSessionItem, saveSessionItem } from "../../../storage/session-storage.mjs";
import { changePostVariables } from "../../api-data/change-post-variables.mjs";
import { validatedForms } from "../../../form/validate-form.mjs";
// import { displayDeletePostFeedback } from "../../../display/post/post-feedback/display-delete-post-feedback.mjs";

export async function downloadPostData(method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));
      const result = await response.json();

      const loader = document.querySelector("#loader");
      const path = window.location.pathname;

      if (response.ok) {
         loader.classList.add("d-none");
         // looping all posts in result array
         result.forEach((post) => {
            changePostVariables(post, response.ok);
         });

         // saving location and response-status on home and profile page,
         // to display all single-posts
         if (path !== "/post/") {
            saveSessionItem("downloadResponseStatus", response.ok);
            saveSessionItem("downloadLocation", path);
         }

         toggleComments();
         postDropdownHandler();
         validatedForms();
      }
   } catch (error) {
      console.log(error);
   }
}
