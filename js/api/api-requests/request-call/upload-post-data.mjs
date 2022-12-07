import { displayCreatePostFeedback } from "../../../display/post/post-feedback/display-create-post-feedback.mjs";
import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { optionWithContent } from "../../api-options/auth-with-content.mjs";

export async function uploadPostData(postObject, method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithContent(postObject, method));
      const result = await response.json();
      console.log("response:", response);
      console.log("result:", result);

      if (method === "post" || method === "put") {
         if (window.location.pathname !== "/post/") {
            displayCreatePostFeedback(response.ok);
         }

         setInterval(() => {
            window.location.reload();
         }, 1500);
      }
   } catch (error) {
      console.log(error);
   }
}
