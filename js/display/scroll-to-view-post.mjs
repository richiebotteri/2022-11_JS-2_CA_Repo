import { filterSearchContainer, profilePostContainer } from "../html-data/post/post-containers.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";

export function scrollToViewPost(postId, authorPost) {
   const isSearchClicked = loadSessionItem("searchInputValue");
   const isFilterClicked = loadSessionItem("filterOptionName");
   const isPostCreated = loadSessionItem("isPostCreated");
   const isPostUpdated = loadSessionItem("isUpdated");
   const isValueTrue = isSearchClicked || isFilterClicked || isPostUpdated || isPostCreated;

   if (isValueTrue && window.location.pathname !== "/post/") {
      if (window.location.pathname === "/profile/") {
         profilePostContainer.scrollIntoView();
      } else {
         if (parseFloat(isPostUpdated) === postId) {
            const updatedPost = authorPost;
            setTimeout(() => {
               updatedPost.scrollIntoView();
            }, 100);
         } else {
            filterSearchContainer.scrollIntoView();
         }
      }
   }

   setInterval(() => {
      if (isSearchClicked) {
         deleteSessionItem("searchInputValue");
      } else if (isFilterClicked) {
         deleteSessionItem("filterOptionName");
      } else if (isPostUpdated) {
         deleteSessionItem("isUpdated");
      } else if (isPostCreated) {
         deleteSessionItem("isPostCreated");
      }
   }, 3000);
}
