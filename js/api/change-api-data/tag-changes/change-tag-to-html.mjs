export function changeToHtmlTag(tags) {
   const htmlTags = tags.map((element) => {
      if (element === "") {
         return "";
      } else {
         return `<span class="py-1 px-2 d-inline-block bg-light border rounded mb-3 me-1">${element}</span>`;
      }
   });

   let loopedData = "";
   htmlTags.forEach((htmlTag) => {
      loopedData += htmlTag;
   });

   return loopedData;
}
