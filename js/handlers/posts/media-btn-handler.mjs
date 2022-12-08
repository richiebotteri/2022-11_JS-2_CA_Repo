/**
 * Toggles viewing media-input when clicking on the media button.
 * @export
 * @module
 */
export function toggleMediaBtn() {
   const mediaBtn = document.querySelector("#media-btn");
   const mediaInputGroup = document.querySelector("#media-input-group");

   mediaBtn.addEventListener("click", () => {
      mediaInputGroup.classList.toggle("d-none");
   });
}
