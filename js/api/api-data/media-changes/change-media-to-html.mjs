export function changeMediaToHtml(media) {
   if (media === null || media === "") {
      return "";
   } else {
      return `<div class="d-flex justify-content-center bg-dark">
               <img src="${media}" class="img-fluid text-secondary" alt="${title} Image" />
               </div>`;
   }
}
