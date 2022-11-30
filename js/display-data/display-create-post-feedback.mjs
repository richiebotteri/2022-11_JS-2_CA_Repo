export function displayCreatePostFeedback(responseOk) {
   const createPostFeedback = document.querySelector(".create-post-feedback");
   const parser = new DOMParser();
   const parseDocument = parser.parseFromString(
      `
      <div id="create-success">
         <h4 class="card-title text-center fw-semibold">Your post has been created</h4>
         <p class="card-body text-center mb-0">Redirecting to new post</p>
      </div>
  `,
      "text/html"
   );

   if (responseOk) {
      createPostFeedback.classList.remove("d-none");
      createPostFeedback.appendChild(parseDocument.getElementById("create-success"));
   }
}
