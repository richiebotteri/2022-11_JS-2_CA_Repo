import { loginAccount } from "../../api/account/login-account.mjs";

export function loginFormHandler() {
   const loginForm = document.querySelector("#form-to-login");
   loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      loginAccount(event);
   });
}
