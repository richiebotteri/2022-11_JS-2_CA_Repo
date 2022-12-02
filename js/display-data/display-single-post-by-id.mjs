import { singlePostField } from "../html-data/post/post-containers.mjs";
import { loadItem } from "../storage/local-storage.mjs";

export function displaySinglePostById(authorPost, contactPost, postId, postAuthor) {
   // Get clicked post id from queryString
   const urlParameterString = window.location.search;
   const params = new URLSearchParams(urlParameterString);
   const queryStringId = parseFloat(params.get("id"));
   const signedInUsername = loadItem("profile").name;
   if (postId === queryStringId) {
      if (postAuthor === signedInUsername) {
         singlePostField.appendChild(authorPost);
      } else {
         singlePostField.appendChild(contactPost);
      }
   }
}
