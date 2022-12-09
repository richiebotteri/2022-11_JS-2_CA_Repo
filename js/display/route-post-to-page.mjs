import { profilePostContainer } from "../html-data/post/post-containers.mjs";
import { loadItem } from "../storage/local-storage.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";
import { displayCorrectPost } from "./display-correct-post.mjs";
import { displayFilterPostOptions } from "./post/display-filter-post-options.mjs";
import { displayPost } from "./post/display-post.mjs";
import { displaySinglePostById } from "./post/display-single-post-by-id.mjs";

export function routePostToPage(authorPost, contactPost, postVariables) {
   const { author, id, stringTags, title } = postVariables;
   const searchInput = loadSessionItem("searchInputValue");
   const doesSearchTagExist = stringTags.includes(searchInput);
   const doesTitleWordExist = title.includes(searchInput);
   const filterOptionClicked = loadSessionItem("filterOptionName");
   const loggedInUser = loadItem("profile").name;
   const path = window.location.pathname;

   switch (true) {
      case path === "/home/":
         if (searchInput) {
            // If searchInput get clicked
            displayFilterPostOptions(author);
            deleteSessionItem("filterOptionName");
            if (searchInput === author) {
               displayCorrectPost(authorPost, contactPost, author);
               return;
            }
            if (parseFloat(searchInput) === id) {
               displayCorrectPost(authorPost, contactPost, author);
               return;
            }
            if (doesSearchTagExist || doesTitleWordExist) {
               displayCorrectPost(authorPost, contactPost, author);
               return;
            }
         } else if (filterOptionClicked) {
            // If filterOptions gets clicked
            displayFilterPostOptions(author);
            deleteSessionItem("searchInputValue");
            if (filterOptionClicked === author) {
               displayCorrectPost(authorPost, contactPost, author);
               return;
            }
            if (filterOptionClicked === "Show all posts") {
               displayCorrectPost(authorPost, contactPost, author);
               return;
            }
         } else {
            // If filter and search are not used
            displayFilterPostOptions(author);
            displayCorrectPost(authorPost, contactPost, author);
         }

         break;
      case path === "/profile/":
         if (loggedInUser === author) {
            displayPost(authorPost, profilePostContainer);
         }
         break;
      case path === "/post/":
         displaySinglePostById(authorPost, contactPost, id, author);
         break;
      default:
         throw new Error("something went wrong");
   }
}
