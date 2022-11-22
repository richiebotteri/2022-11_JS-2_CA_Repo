// Autenticate new registered users using the API

import { SOCIAL_URL } from "../api-environment.mjs";

export async function authenticateNewUser(newProfile, method, action) {
   try {
      const successFeedback = document.querySelector("#success-feedback");

      const option = {
         method: method,
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newProfile),
      };
      const response = await fetch(`${SOCIAL_URL}${action}`, option);

      const result = await response.json();

      console.log("check reponse", response);
      console.log("fetch result: ", result);
      if (response.ok === true) {
         successFeedback.classList.remove("d-none");
         successFeedback.classList.replace("bg-info", "bg-success");
         successFeedback.innerHTML = `
         <h4 class="card-title text-center fw-semibold">Hello ${newProfile.name}!</h4>
         <p class="text-center mb-0">Your account has been created. You can log in</p>
         `;
      } else {
         successFeedback.classList.add("d-none");
      }

      if (result.errors[0].message == "Profile already exists") {
         successFeedback.classList.remove("d-none");
         successFeedback.classList.replace("bg-success", "bg-info");
         successFeedback.innerHTML = `
            <h4 class="card-title text-center fw-semibold ">Hello ${newProfile.name}</h4>
            <p class="text-center mb-0 ">Your account allready exists. You can log in</p>
            `;
      }
   } catch (error) {
      console.log(error);
   }
}
