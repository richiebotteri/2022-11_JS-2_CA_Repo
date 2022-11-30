import { registerAccount } from "../../api/signup/register-account.mjs";
import { validateInputs } from "../../form-validation/validatedInput.mjs";

export function registerFormHandler() {
   const formToRegister = document.querySelector("#form-to-register");

   formToRegister.addEventListener("submit", (event) => {
      event.preventDefault();

      const registerFormArray = [];
      const { name, email, password } = event.target;
      registerFormArray.push(name, email, password);

      const isValid = validateInputs(registerFormArray);

      if (isValid) {
         registerAccount(event.target);
      } else {
         console.log("form not valid");
      }
   });
}
