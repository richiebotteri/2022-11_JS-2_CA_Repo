import { SOCIAL_URL } from "../constants/api-prefix-constants.mjs";
import { displayLoginFeedback } from "../display/display-login-feedback.mjs";
import { displayRegisterFeedback } from "../display/display-register-feedback.mjs";

export async function authenticateProfile(profileCredentials, method, action) {
   try {
      const option = {
         method: method,
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify(profileCredentials),
      };
      const response = await fetch(`${SOCIAL_URL}${action}`, option);
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
