import { profilePostContainer } from "../html-data/post/post-containers.mjs";
import { loadItem } from "../storage/local-storage.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";
import { displayCorrectPost } from "./display-correct-post.mjs";
import { displayFilterPostOptions } from "./post/display-filter-post-options.mjs";
import { displayPost } from "./post/display-post.mjs";
import { displaySinglePostById } from "./post/display-single-post-by-id.mjs";

export function routePostToPage(authorPost, contactPost, postVariables) {
   const { author, id, stringTags, title } = postVariables;
   const loggedInUser = loadItem("profile").name;
   const path = window.location.pathname;

   switch (true) {
      case path === "/home/":
         let searchInput = loadSessionItem("searchInputValue");
         const filterOptionClicked = loadSessionItem("filterOptionName");

         if (typeof searchInput !== "object") {
            const searchValue = searchInput.toLowerCase();
            const doesTitleWordExist = title.includes(searchValue);
            const doesSearchTagExist = stringTags.includes(searchValue);
            // If searchInput gets clicked
            displayFilterPostOptions(author);
            deleteSessionItem("filterOptionName");
            if (searchValue === author.toLowerCase()) {
               displayCorrectPost(authorPost, contactPost, author);
               return;
            }
            if (parseFloat(searchValue) === id) {
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
            searchInput = "";

            // If filter and search are not used
            displayFilterPostOptions(author);
            displayCorrectPost(authorPost, contactPost, author);
         }

         break;
      case path === "/profile/":
         // if user is on profile page, display author posts
         if (loggedInUser === author) {
            displayPost(authorPost, profilePostContainer);
         }
         break;
      case path === "/post/":
         // if user is on post page, display single-post
         displaySinglePostById(authorPost, contactPost, id, author);
         break;
      default:
         throw new Error("something went wrong");
   }
}
