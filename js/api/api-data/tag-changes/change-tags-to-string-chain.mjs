export function changeTagsToStringChain(tags) {
   const tagsArray = tags;
   if (tagsArray !== "") {
      const stringTagChain = tagsArray.join(" ").trim();
      return stringTagChain;
   } else {
      return tagsArray;
   }
}
