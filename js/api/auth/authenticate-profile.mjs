import { SOCIAL_URL } from "../api-environment.mjs";
import { redirectIfToken } from "../../api/auth/redirect-active-user.mjs";
import * as storage from "../../storage/local-storage.mjs";
import * as sessionStorage from "../../storage/session-storage.mjs";

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
         sessionStorage.saveItem("online", true);
         // Feedback on Login
         const loginFeedback = document.querySelector("#submit-feedback-login");

         if (response.ok) {
            loginFeedback.classList.remove("d-none");
            loginFeedback.classList.replace("bg-danger", "bg-success");
            loginFeedback.innerHTML = `
               <h4 class="card-title text-center fw-semibold">Your account has been logged in!</h4>
               <p class="text-center mb-0">Redirecting to profile dashboard</p>
               `;
         } else {
            loginFeedback.classList.add("d-none");
         }

         if (result.errors && result.errors[0].message === "Invalid email or password") {
            loginFeedback.classList.remove("d-none");
            loginFeedback.innerHTML = `
              <h4 class="card-title text-center fw-semibold">Woopzy</h4>
              <p class="text-center mb-0">Your typed in the wrong email or password</p>
              `;
         }

         // Send user to view profile if valid token
         setTimeout(() => {
            redirectIfToken(accessToken);
         }, 3500);
      }
   } catch (error) {
      console.log(error);
   }
}
