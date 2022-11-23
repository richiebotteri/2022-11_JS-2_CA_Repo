import { authenticateProfile } from "../api/auth/authenticate-profile.mjs";

export function loginAccount() {
   const loginForm = document.querySelector("#form-to-login");

   loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formElements = event.target;
      const loginCredentials = {
         email: formElements.email.value,
         password: formElements.password.value,
      };
      const method = formElements.method;
      const action = formElements.attributes.action.value;

      console.log(loginCredentials, method, action);
      authenticateProfile(loginCredentials, method, action);
   });
}
