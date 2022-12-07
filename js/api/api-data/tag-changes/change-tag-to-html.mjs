export function changeToHtmlTag(tags) {
   const tagsArray = tags;
   if (tagsArray !== "") {
      let newArray = "";
      newArray = tagsArray
         .map((item) => {
            return `<span class="py-1 px-2 bg-light border rounded mb-3 me-2">${item}</span>`;
         })
         .join("");
      return newArray;
   } else {
      return tagsArray;
   }
}
