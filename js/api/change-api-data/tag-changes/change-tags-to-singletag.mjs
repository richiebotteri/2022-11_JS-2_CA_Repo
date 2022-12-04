export function changeTagsToSingleTag(tags) {
   const tagsObject = tags;
   if (tagsObject[0]) {
      if (tagsObject[0] !== "") {
         for (let i = 0; i < tagsObject.length; i++) {
            const tagItem = tagsObject[i];
            if (tagItem.includes(", ")) {
               const tagArray = tagItem.split(",");
               return tagArray;
            } else if (tagItem.includes(" ")) {
               const tagArray = tagItem.split(" ");
               return tagArray;
            } else {
               return tagItem;
            }
         }
      }
   } else {
      return "";
   }
}
