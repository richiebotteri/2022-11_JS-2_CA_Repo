import { SOCIAL_URL } from "../api-environment.mjs";
import * as storage from "../../storage/index.mjs";

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

      console.log("check response", response);

      // Feedback on Register
      if (response.url == `${SOCIAL_URL}/auth/register`) {
         const registerFeedback = document.querySelector("#submit-feedback-register");

         if (response.ok) {
            registerFeedback.classList.remove("d-none");
            registerFeedback.classList.replace("bg-info", "bg-success");
            registerFeedback.innerHTML = `
         <h4 class="card-title text-center fw-semibold">Hello ${profileCredentials.name}!</h4>
         <p class="text-center mb-0">Your account has been created. You can log in</p>
         `;
         } else {
            registerFeedback.classList.add("d-none");
         }

         if (result.errors && result.errors[0].message === "Profile already exists") {
            registerFeedback.classList.remove("d-none");
            registerFeedback.classList.replace("bg-success", "bg-info");
            registerFeedback.innerHTML = `
            <h4 class="card-title text-center fw-semibold ">Hello ${profileCredentials.name}</h4>
            <p class="text-center mb-0 ">Your account already exists. You can log in</p>
            `;
         }
      }

      if (response.url == `${SOCIAL_URL}/auth/login`) {
         // Save login token & profile
         const { accessToken, ...profile } = result;
         storage.saveItem("loginToken", accessToken);
         storage.saveItem("profile", profile);
         // Feedback on Login
         const loginFeedback = document.querySelector("#submit-feedback-login");

         if (result.errors && result.errors[0].message === "Invalid email or password") {
            loginFeedback.classList.remove("d-none");
            loginFeedback.classList.replace("bg-info", "bg-success");
            loginFeedback.innerHTML = `
              <h4 class="card-title text-center fw-semibold">Woopzy</h4>
              <p class="text-center mb-0">Your typed in the wrong email or password</p>
              `;
         }

         // Redirect to view profile
         window.location = "/profile/view/";
      }
   } catch (error) {
      console.log(error);
   }
}
