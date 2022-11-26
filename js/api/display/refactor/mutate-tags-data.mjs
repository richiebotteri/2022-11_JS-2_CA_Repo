export function changeToHtmlTags(tags) {
   let html = "";

   const withHtml = tags.map((elements) => {
      if (elements == "") {
         return "";
      } else {
         return `<span class="py-1 px-2 d-inline-block bg-light border rounded mb-3 me-1">${elements}</span>`;
      }
   });

   withHtml.forEach((tag) => {
      html += tag;
   });

   console.log(html);

   return html;
}
