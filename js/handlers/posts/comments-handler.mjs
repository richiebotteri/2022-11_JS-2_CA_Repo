/**
 * Toggles viewing comments when clicking on the comments button.
 * @export
 * @module toggleComments
 */
export function toggleComments() {
   const showCommentBtns = document.querySelectorAll("#show-comments-btn");
   const commentsFields = document.querySelectorAll("[data-comments-id]");

   showCommentBtns.forEach((commentBtn) => {
      commentBtn.addEventListener("click", () => {
         commentsFields.forEach((commentsField) => {
            if (commentBtn.dataset.btnId === commentsField.dataset.commentsId) {
               commentsField.classList.toggle("d-none");
            }
         });
      });
   });
}
