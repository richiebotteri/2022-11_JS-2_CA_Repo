import { registerAccount } from "../../api/account/register-account.mjs";

export function registerFormHandler() {
   const formToRegister = document.querySelector("#form-to-register");

   formToRegister.addEventListener("submit", (event) => {
      event.preventDefault();
      registerAccount(event.target);
   });
}
