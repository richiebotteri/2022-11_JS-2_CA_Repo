export function changeMediaToHtml(media, title) {
   if (media === null || media === "") {
      return "";
   } else {
      return `<div class="d-flex justify-content-center bg-black">
               <img src="${media}" class="img-fluid text-secondary" alt="${title} Image" />
               </div>`;
   }
}
