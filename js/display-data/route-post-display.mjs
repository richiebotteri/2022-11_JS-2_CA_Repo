import { homePostContainer, profilePostContainer } from "../html-data/post/post-containers.mjs";
import { loadItem } from "../storage/local-storage.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";
import { displayPost } from "./display-post.mjs";

export function routePostDisplay(authorPost, contactPost, author, id) {
   const searchInput = loadSessionItem("searchInputValue");
   const filterOptionClicked = loadSessionItem("filterOptionName");
   const loggedInUser = loadItem("profile").name;

   if (searchInput) {
      deleteSessionItem("filterOptionName");
      if (searchInput === author) {
         if (loggedInUser === author) {
            displayPost(authorPost, homePostContainer);
         } else {
            displayPost(contactPost, homePostContainer);
         }
      } else if (parseFloat(searchInput) === id) {
         if (loggedInUser === author) {
            displayPost(authorPost, homePostContainer);
         } else {
            displayPost(contactPost, homePostContainer);
         }
      }
   } else if (filterOptionClicked) {
      deleteSessionItem("searchInputValue");
      if (filterOptionClicked === author) {
         if (loggedInUser === author) {
            displayPost(authorPost, homePostContainer);
         } else {
            displayPost(contactPost, homePostContainer);
         }
      }
   } else if (window.location.pathname === "/profile/post/") {
      if (loggedInUser === author) {
         displaySinglePostById(authorPost, id);
      } else {
         displaySinglePostById(contactPost, id);
      }
   } else if (window.location.pathname === "/profile/view/") {
      if (loggedInUser === author) {
         displayPost(contactPost, profilePostContainer);
      }
   } else {
      if (loggedInUser === author) {
         displayPost(authorPost, homePostContainer);
      } else {
         displayPost(contactPost, homePostContainer);
      }
   }
}
