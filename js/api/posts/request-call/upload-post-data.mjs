import { SOCIAL_URL } from "../../constants/api-prefix-constants.mjs";
import * as localStorage from "../../../storage/local-storage.mjs";

export async function uploadPostData(postObject, method, action) {
   try {
      let options = {
         method: method,
         headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.loadItem("loginToken")}`,
         },
         body: JSON.stringify(postObject),
      };

      const response = await fetch(`${SOCIAL_URL}${action}`, options);
      const result = await response.json();

      console.log("response:", response);
      console.log("result: ", result);
   } catch (error) {
      console.log(error);
   }
}
