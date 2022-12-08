import { loginAccount } from "../../api/api-authenticate/signup/login-account.mjs";
import { validateInputs } from "../../form/validatedInput.mjs";

/**
 * Gets data typed inside the login-form inputs when the form gets submitted.
 * @export
 * @module loginFormHandler
 * @description
 * It gets the html login-form and than listens for a submit event.
 *
 * When the form is submitted the value of the form-inputs
 * gets validated according to pattern set on the inputs
 *
 * The validation-function return a boolean of true or false depending on the results.
 *
 * if form is valid (true), the submit-event will be sent to the loginAccount function.
 */
export function loginFormHandler() {
   const loginForm = document.querySelector("#form-to-login");
   loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const loginFormArray = [];
      const { email, password } = event.target;
      loginFormArray.push(email, password);

      const isValid = validateInputs(loginFormArray);

      if (isValid) {
         loginAccount(event);
      } else {
         console.log("form not valid");
      }
   });
}
