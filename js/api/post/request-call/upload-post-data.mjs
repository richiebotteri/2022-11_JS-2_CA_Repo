import { displayCreatePostFeedback } from "../../../display-data/display-create-post-feedback.mjs";
import { loadSessionItem, saveSessionItem } from "../../../storage/session-storage.mjs";
import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { optionWithContent } from "../../api-options/auth-with-content.mjs";

export async function uploadPostData(postObject, method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithContent(postObject, method));
      const result = await response.json();
      console.log("response:", response);

      if (method === "post" || method === "put") {
         console.log(result.id);
         displayCreatePostFeedback(response.ok);
         saveSessionItem("postId", result.id);

         setInterval(() => {
            window.location = window.location.pathname;
         }, 1500);
      }
   } catch (error) {
      console.log(error);
   }
}
