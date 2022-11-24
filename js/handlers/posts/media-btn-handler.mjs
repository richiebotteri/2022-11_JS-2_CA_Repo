export function toggleMediaBtn() {
   const mediaBtn = document.querySelector("#media-btn");
   const mediaInputGroup = document.querySelector("#media-input-group");

   mediaBtn.addEventListener("click", () => {
      mediaInputGroup.classList.toggle("d-none");
   });
}
