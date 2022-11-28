export function postDropdownHandler(responseOk) {
   if (responseOk) {
      const postDropdownBtn = document.querySelector("#post-dropdown-btn");
      postDropdownBtn.addEventListener("click", (event) => {
         console.log(event.target);
      });
   }
}
