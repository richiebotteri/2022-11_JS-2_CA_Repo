import { SOCIAL_URL } from "../../constants/api-prefix-constants.mjs";
import * as localStorage from "../../../storage/local-storage.mjs";
import { optionWithContent } from "../../api-options/auth-with-content.mjs";

export async function uploadPostData(postObject, method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithContent(postObject, method));
      const result = await response.json();

      console.log("response:", response);
      console.log("result: ", result);
   } catch (error) {
      console.log(error);
   }
}
