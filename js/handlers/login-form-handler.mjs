export function loginAccount() {
   const test = document.querySelector("#test");

   test.addEventListener("submit", (event) => {
      event.preventDefault();
      const loginForm = event.target;
      console.log(loginForm);
   });
}
