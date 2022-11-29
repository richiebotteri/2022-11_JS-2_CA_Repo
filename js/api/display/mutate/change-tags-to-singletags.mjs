export function changeTagsToSingleTags(tags) {
   let singleTag = "";
   tags.forEach((tag) => {
      singleTag += tag;
   });
   return singleTag;
}
