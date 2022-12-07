export function changeToTagsWithContent(tags) {
   const tagsArray = tags;
   if (tagsArray.length === 0) {
      return "";
   } else {
      const haveEmptyString = tagsArray.every((tag) => {
         return tag === "";
      });
      if (haveEmptyString) {
         return "";
      } else {
         return tagsArray;
      }
   }
}
