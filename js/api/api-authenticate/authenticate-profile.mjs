import { optionWithContent } from "../api-options/auth-with-content.mjs";
import { SOCIAL_URL } from "../api-constants/index.mjs";
import { displayLoginFeedback } from "../../display/signup-feedback/display-login-feedback.mjs";
import { displayRegisterFeedback } from "../../display/signup-feedback/display-register-feedback.mjs";
import { savingLoginProfile } from "./saving-login-profile.mjs";

export async function authenticateProfile(profileCredentials, method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithContent(profileCredentials, method));
      const result = await response.json();

      // Feedback on Register
      if (response.url === `${SOCIAL_URL}/auth/register`) {
         displayRegisterFeedback(response, result, profileCredentials);
      }

      // Feedback on login
      if (response.url === `${SOCIAL_URL}/auth/login`) {
         savingLoginProfile(result);
         displayLoginFeedback(response, result);
      }
   } catch (error) {
      console.log(error);
   }
}
