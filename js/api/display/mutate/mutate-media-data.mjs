export function changeMediaData(media) {
   if (media === null || media === "") {
      return "https://source.unsplash.com/random/300x300";
   } else {
      return media;
   }
}
