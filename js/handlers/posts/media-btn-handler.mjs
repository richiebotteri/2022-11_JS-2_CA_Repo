export function toggleMediaBtn() {
   const mediaBtn = document.querySelector("#media-btn");
   const mediaInput = document.querySelector("#media-input");

   mediaBtn.addEventListener("click", () => {
      mediaInput.classList.toggle("d-none");
   });
}
