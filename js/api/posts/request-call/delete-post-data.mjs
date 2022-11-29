import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";

export async function deletePostData(method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));
      const result = await response.json();
      console.log("response", response);
      console.log("result", result);
   } catch (error) {
      console.log(error);
   }
}
