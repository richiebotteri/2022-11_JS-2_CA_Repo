import { createParseDoc } from "../../../html-data/createParseDoc.mjs";

export function displayCreatePostFeedback(responseOk) {
   const feedbackContainer = document.querySelector(".create-post-feedback");
   const feedbackContent = `
   <div id="create-success">
         <h4 class="card-title text-center fw-semibold">Your post has been created</h4>
         <p class="card-body text-center mb-0">Redirecting to new post</p>
      </div>
   `;

   const parseDocument = createParseDoc(feedbackContent);
   if (responseOk) {
      feedbackContainer.classList.remove("d-none");
      feedbackContainer.appendChild(parseDocument.getElementById("create-success"));
   }
}
