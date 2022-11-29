export function changeToHtmlTag(tag) {
   if (tag == "") {
      return "";
   } else {
      return `<span class="py-1 px-2 d-inline-block bg-light border rounded mb-3 me-1">${tag}</span>`;
   }
}
