import { homePostContainer } from "../html-data/post/post-containers.mjs";
import { loadItem } from "../storage/local-storage.mjs";
import { displayPost } from "./post/display-post.mjs";

export function displayCorrectPost(authorPost, contactPost, author, id) {
   const loggedInUser = loadItem("profile").name;
   if (loggedInUser === author) {
      displayPost(authorPost, homePostContainer);
   } else {
      displayPost(contactPost, homePostContainer);
   }
}
