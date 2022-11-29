import { optionWithContent } from "../api-options/auth-with-content.mjs";
import { SOCIAL_URL } from "../api-constants/index.mjs";
import { displayLoginFeedback } from "../../display-data/display-login-feedback.mjs";
import { displayRegisterFeedback } from "../../display-data/display-register-feedback.mjs";

export async function authenticateProfile(profileCredentials, method, action) {
   try {
      const option = {
         method: method,
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(profileCredentials),
      };
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithContent(profileCredentials, method));
      const result = await response.json();

      console.log("check result", result);

      // Feedback on Register
      if (response.url == `${SOCIAL_URL}/auth/register`) {
         displayRegisterFeedback(response, result, profileCredentials);
      }

      if (response.url == `${SOCIAL_URL}/auth/login`) {
         displayLoginFeedback(response, result);
      }
   } catch (error) {
      console.log(error);
   }
}
