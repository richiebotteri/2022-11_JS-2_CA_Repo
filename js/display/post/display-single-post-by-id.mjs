import { singlePostField } from "../../html-data/post/post-containers.mjs";

export function displaySinglePostById(post, postId) {
   // Get clicked post id from queryString
   const urlParameterString = window.location.search;
   const params = new URLSearchParams(urlParameterString);
   const queryStringId = parseFloat(params.get("id"));

   // removes view post link
   const viewPostLink = post.querySelector(".view-post-link");
   viewPostLink.classList.add("d-none");

   if (queryStringId === postId) {
      singlePostField.appendChild(post);
   }
}
