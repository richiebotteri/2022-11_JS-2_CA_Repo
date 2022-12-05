import { homePostContainer, profilePostContainer } from "../html-data/post/post-containers.mjs";
import { loadItem } from "../storage/local-storage.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";
import { displayFilterPostOptions } from "./post/display-filter-post-options.mjs";
import { displayPost } from "./post/display-post.mjs";
import { displaySinglePostById } from "./post/display-single-post-by-id.mjs";

export function routeToDisplayPost(authorPost, contactPost, author, id, tagString) {
   const searchInput = loadSessionItem("searchInputValue");
   const doesSearchTagExist = tagString.includes(searchInput);
   const filterOptionClicked = loadSessionItem("filterOptionName");
   const loggedInUser = loadItem("profile").name;
   const path = window.location.pathname;

   if (searchInput && path === "/profile/home-feed/") {
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
      } else if (doesSearchTagExist) {
         if (loggedInUser === author) {
            displayPost(authorPost, homePostContainer);
         } else {
            displayPost(contactPost, homePostContainer);
         }
      }
   } else if (filterOptionClicked && path === "/profile/home-feed/") {
      displayFilterPostOptions(author);
      deleteSessionItem("searchInputValue");
      if (filterOptionClicked === author) {
         if (loggedInUser === author) {
            displayPost(authorPost, homePostContainer);
         } else {
            displayPost(contactPost, homePostContainer);
         }
      }
   } else if (path === `/profile/post/`) {
      if (loggedInUser === author) {
         displaySinglePostById(authorPost, id);
      } else {
         displaySinglePostById(contactPost, id);
      }
   } else if (path === "/profile/view/") {
      if (loggedInUser === author) {
         displayPost(authorPost, profilePostContainer);
      }
   } else {
      displayFilterPostOptions(author);
      if (loggedInUser === author) {
         displayPost(authorPost, homePostContainer);
      } else {
         displayPost(contactPost, homePostContainer);
      }
   }
}
