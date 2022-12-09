import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";

export async function deletePostData(method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));

      if (response.ok) {
         setInterval(() => {
            window.location = window.location.pathname;
         }, 1500);
      }
   } catch (error) {
      console.log(error);
   }
}
