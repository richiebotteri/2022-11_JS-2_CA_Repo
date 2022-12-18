import { createParseDoc } from "../../../html-data/createParseDoc.mjs";

export function displayDeletePostFeedback(status, postId) {
   const feedbackContent = `
  <div class="post-deleted-feedback g-col-12 d-flex justify-content-center align-items-center shadow bg-danger text-white fw-semibold p-2 my-5">
  <p class="m-0">Post is deleted!</p>
  </div>

  <div class="single-post-deleted-feedback g-col-12 d-flex justify-content-center align-items-center shadow bg-danger text-white fw-semibold p-2">
  <p class="m-0">Post is deleted! Redirecting to profile page</p>
  </div>
  `;

   const parseDocument = createParseDoc(feedbackContent);
   if (status === "after post deleted") {
      const afterFeedback = document.querySelector(`[data-id="${postId}"]`);
      if (window.location.pathname !== "/post/") {
         afterFeedback.replaceWith(parseDocument.querySelector(".post-deleted-feedback"));
         return;
      } else {
         afterFeedback.replaceWith(parseDocument.querySelector(".single-post-deleted-feedback"));
         setTimeout(() => {
            window.location.pathname = "/profile/";
         }, 2000);
         return;
      }
   }
}
