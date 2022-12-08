/**
 * Closes the edit-form when clicking on close-button in the form
 * @export
 * @module closeEditPostHandler
 */
export function closeEditPostHandler(editForm) {
   const closeEditBtn = document.querySelector(".close-edit-btn");
   closeEditBtn.addEventListener("click", (event) => {
      editForm.classList.replace("d-flex", "d-none");
   });
}
