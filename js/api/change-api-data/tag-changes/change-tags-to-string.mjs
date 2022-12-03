export function changeTagsToString(tags) {
   let singleTag = "";
   tags.forEach((tag) => {
      singleTag += `${tag} `;
   });

   if (singleTag.includes(", ")) {
      const tagArray = singleTag.split(", ");
      return tagArray;
   } else if (singleTag.includes(",")) {
      const tagArray = singleTag.split(",");
      return tagArray;
   } else {
      return singleTag.trimEnd();
   }
}
