export function displayRegisterFeedback(response, result, profileCredentials) {
   const registerFeedback = document.querySelector("#submit-feedback-register");
   const parser = new DOMParser();
   const parserDocument = parser.parseFromString(
      `
      <div id="register-success" class="card bg-success p-5 rounded-2 text-white fw-semibold mb-2">
         <h4 class="card-title text-center fw-semibold">Hello ${profileCredentials.name}!</h4>
         <p class="text-center mb-0">Your account has been created. You can log in</p>
      </div>
      <div id="register-exist" class="card bg-info p-5 rounded-2 text-white fw-semibold mb-2">
         <h4 class="card-title text-center fw-semibold ">Hello ${profileCredentials.name}</h4>
         <p class="text-center mb-0 ">Your account already exists. You can log in</p>
      </div>
   
   `,
      "text/html"
   );
   if (response.ok) {
      registerFeedback.classList.remove("d-none");
      registerFeedback.replaceWith(parserDocument.getElementById("register-success"));
   } else {
      registerFeedback.classList.add("d-none");
   }

   if (result.errors && result.errors[0].message === "Profile already exists") {
      registerFeedback.classList.remove("d-none");
      registerFeedback.replaceWith(parserDocument.getElementById("register-exist"));
   }
}
