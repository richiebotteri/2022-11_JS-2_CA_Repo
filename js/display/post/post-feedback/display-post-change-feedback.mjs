export function displayPostChangeFeedback(responseOk) {
   if (responseOk) {
      const feedbackContainer = document.querySelector(".post-change-feedback");
      const parser = new DOMParser();
      const parseDocument = parser.parseFromString(
         `
        <div id="post-deleted">
          <h4 class="card-title text-center fw-semibold">Your post has been deleted</h4>
        </div>
    `,
         "text/html"
      );

      feedbackContainer.classList.remove("d-none");
      feedbackContainer.appendChild(parseDocument.getElementById("post-deleted"));
      setInterval(() => {
         feedbackContainer.classList.add("d-none");
      }, 3500);
   }
}
