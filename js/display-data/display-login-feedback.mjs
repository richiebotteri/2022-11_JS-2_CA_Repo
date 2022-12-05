import { redirectIfToken } from "../api/api-authenticate/redirect-active-user.mjs";
import { createParseDoc } from "../html-data/createParseDoc.mjs";
import { saveItem } from "../storage/local-storage.mjs";
import { saveSessionItem } from "../storage/session-storage.mjs";

export function displayLoginFeedback(response, result) {
   // Save login token & profile
   const { accessToken, ...profile } = result;
   saveItem("loginToken", accessToken);
   saveItem("profile", profile);
   saveSessionItem("online", true);

   // Feedback on Login
   const loginFeedback = document.querySelector("#submit-feedback-login");
   const LoginFeedBackHtml = `
   <div id="login-success" class="card bg-success p-5 rounded-2 text-white fw-semibold mb-2">
      <h4 class="card-title text-center fw-semibold">Your account has been logged in!</h4>
      <p class="text-center mb-0">Redirecting to profile dashboard</p>
   </div>
   <div id="login-failed" class="card bg-danger p-5 rounded-2 text-white fw-semibold mb-2">
      <h4 class="card-title text-center fw-semibold">Woopzy</h4>
      <p class="text-center mb-0">Your typed in the wrong email or password</p>
   </div>

`;
   const parseDocument = createParseDoc(LoginFeedBackHtml);

   if (response.ok) {
      loginFeedback.classList.remove("d-none");
      loginFeedback.replaceChildren(parseDocument.getElementById("login-success"));
   } else {
      loginFeedback.classList.add("d-none");
   }

   if (result.errors && result.errors[0].message === "Invalid email or password") {
      loginFeedback.classList.remove("d-none");
      loginFeedback.replaceChildren(parseDocument.getElementById("login-failed"));
   }

   // Send user to view profile if valid token
   setTimeout(() => {
      redirectIfToken();
   }, 2000);
}
