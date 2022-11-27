export function filterMediaUrl(media) {
   const searchTerms = ["images.unsplash", "unsplash", "freeimage.host"];
   const indexOfArray = [];
   searchTerms.forEach((searchTerm) => {
      indexOfArray.push(media.indexOf(searchTerm));
   });

   let html = "";
   indexOfArray.forEach((isWord) => {
      html = isWord;
   });

   if (html === -1) {
      // valid url
      return media;
   } else {
      // not valid url
      return "";
   }
}
