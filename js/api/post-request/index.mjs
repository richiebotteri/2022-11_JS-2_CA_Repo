import { SOCIAL_URL } from "../api-environment.mjs";
import * as localStorage from "../../storage/local-storage.mjs";

export async function makePostRequest(postObject, method, action) {
   try {
      const options = {
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
