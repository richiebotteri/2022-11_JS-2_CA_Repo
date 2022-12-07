import { authenticateProfile } from "../authenticate-profile.mjs";

export function loginAccount(event) {
   const formElements = event.target;
   const loginCredentials = {
      email: formElements.email.value,
      password: formElements.password.value,
   };
   const method = formElements.method;
   const action = formElements.attributes.action.value;

   authenticateProfile(loginCredentials, method, action);
}
