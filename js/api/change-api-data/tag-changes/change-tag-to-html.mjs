export function changeToHtmlTag(tag) {
   const newArray = [];
   if (!tag) {
      return "";
   } else {
      if (typeof tag === "object") {
         for (let i = 0; i < tag.length; i++) {
            newArray.push(`<span class="py-1 px-2 bg-light border rounded mb-3 me-2">${tag[i]}</span>`);
         }
      } else {
         newArray.push(`<span class="py-1 px-2 bg-light border rounded mb-3 me-2">${tag}</span>`);
      }
   }

   const joinAsString = Object.keys(newArray)
      .map((item) => {
         return newArray[item];
      })
      .join(" ");
   return joinAsString;
}
