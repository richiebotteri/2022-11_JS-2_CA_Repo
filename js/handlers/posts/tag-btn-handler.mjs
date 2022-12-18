/**
 * Toggles viewing tag-input when clicking on the media button.
 * @export
 * @module toggleTagBtn
 */
export function toggleTagBtn() {
   const tagBtn = document.querySelector("#tag-btn");
   const tagInputGroup = document.querySelector("#tag-input-group");

   tagBtn.addEventListener("click", () => {
      tagInputGroup.classList.toggle("d-none");
   });
}
