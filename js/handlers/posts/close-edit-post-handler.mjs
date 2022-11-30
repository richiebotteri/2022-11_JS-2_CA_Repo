export function closeEditPostHandler(editForm) {
   const closeEditBtn = document.querySelector(".close-edit-btn");
   closeEditBtn.addEventListener("click", (event) => {
      editForm.classList.replace("d-flex", "d-none");
   });
}
