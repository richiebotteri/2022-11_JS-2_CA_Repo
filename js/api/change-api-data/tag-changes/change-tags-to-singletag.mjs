export function changeTagsToSingleTag(tags) {
   const tagsObject = tags;
   if (tagsObject[0] !== undefined) {
      if (tagsObject[0] !== "") {
         for (let i = 0; i < tagsObject.length; i++) {
            const tagString = tagsObject[i];
            if (tagString.includes(", ")) {
               const tagArray = tagString.split(",");
               return tagArray;
            } else if (tagString.includes(" ")) {
               const tagArray = tagString.split(" ");
               return tagArray;
            } else {
               return tagString;
            }
         }
      }
   }
}
