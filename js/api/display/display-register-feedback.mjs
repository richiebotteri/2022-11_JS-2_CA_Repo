export function displayRegisterFeedback(response, result, profileCredentials) {
   const registerFeedback = document.querySelector("#submit-feedback-register");

   if (response.ok) {
      registerFeedback.classList.remove("d-none");
      registerFeedback.classList.replace("bg-info", "bg-success");
      registerFeedback.innerHTML = `
    <h4 class="card-title text-center fw-semibold">Hello ${profileCredentials.name}!</h4>
    <p class="text-center mb-0">Your account has been created. You can log in</p>
    `;
   } else {
      registerFeedback.classList.add("d-none");
   }

   if (result.errors && result.errors[0].message === "Profile already exists") {
      registerFeedback.classList.remove("d-none");
      registerFeedback.classList.replace("bg-success", "bg-info");
      registerFeedback.innerHTML = `
      <h4 class="card-title text-center fw-semibold ">Hello ${profileCredentials.name}</h4>
      <p class="text-center mb-0 ">Your account already exists. You can log in</p>
      `;
   }
}
