import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { optionWithContent } from "../../api-options/auth-with-content.mjs";

export async function uploadPostData(postObject, method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithContent(postObject, method));
      console.log("response:", response);

      if (response.ok) {
         setInterval(() => {
            window.location = window.location.pathname;
         }, 1500);
      }
   } catch (error) {
      console.log(error);
   }
}
