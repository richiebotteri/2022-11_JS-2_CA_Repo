export function toggleComments() {
   const showCommentsBtn = document.querySelector("#show-comments-btn");
   const commentsField = document.querySelector("[data-comments-field]");

   showCommentsBtn.addEventListener("click", () => {
      commentsField.classList.toggle("d-none");
      if (!commentsField.classList.contains("d-none")) {
         window.location.href = "/profile/view/#comments";
      }
   });
   console.log(showCommentsBtn);
}
