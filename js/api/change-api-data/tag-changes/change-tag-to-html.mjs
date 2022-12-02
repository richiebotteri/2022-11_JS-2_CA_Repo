export function changeToHtmlTag(tags) {
   const htmlTags = tags.map((element) => {
      if (element === "") {
         return "";
      } else {
         return `<span class="py-1 px-2 bg-light border rounded mb-3 me-2">${element}</span>`;
      }
   });

   let loopedData = "";
   htmlTags.forEach((htmlTag) => {
      loopedData += htmlTag;
   });

   return loopedData;
}
