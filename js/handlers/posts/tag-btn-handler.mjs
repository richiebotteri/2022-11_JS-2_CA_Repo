export function toggleTagBtn() {
   const tagBtn = document.querySelector("#tag-btn");
   const tagInputGroup = document.querySelector("#tag-input-group");

   tagBtn.addEventListener("click", () => {
      tagInputGroup.classList.toggle("d-none");
   });
}
