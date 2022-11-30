import { loginAccount } from "../../api/signup/login-account.mjs";
import { validateInputs } from "../../form-validation/validatedInput.mjs";

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
