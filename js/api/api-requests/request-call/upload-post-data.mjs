import { displayCreatePostFeedback } from "../../../display/post/post-feedback/display-create-post-feedback.mjs";
import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { optionWithContent } from "../../api-options/auth-with-content.mjs";

export async function uploadPostData(postObject, method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithContent(postObject, method));
      if (method === "post" || method === "put") {
         console.log("here");
         if (window.location.pathname !== "/post/") {
            displayCreatePostFeedback(response.ok);
         }

         setTimeout(() => {
            window.location.reload();
         }, 1500);
      }
   } catch (error) {
      console.log(error);
   }
}
