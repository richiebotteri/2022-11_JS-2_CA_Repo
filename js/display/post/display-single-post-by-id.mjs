import { singlePostField } from "../../html-data/post/post-containers.mjs";
import { loadItem } from "../../storage/local-storage.mjs";

export function displaySinglePostById(authorPost, contactPost, postId, author) {
   // Get clicked post id from queryString
   const urlParameterString = window.location.search;
   const params = new URLSearchParams(urlParameterString);
   const queryStringId = parseFloat(params.get("id"));

   // removes view post link
   let viewPostLink = "";

   // Displaying correct post
   const loggedInUser = loadItem("profile").name.toLowerCase();

   if (queryStringId === postId) {
      if (loggedInUser === author) {
         viewPostLink = authorPost.querySelector(".view-post-link");
         viewPostLink.classList.add("d-none");
         singlePostField.appendChild(authorPost);
      } else {
         viewPostLink = contactPost.querySelector(".view-post-link");
         viewPostLink.classList.add("d-none");
         singlePostField.appendChild(contactPost);
      }
   }
}
