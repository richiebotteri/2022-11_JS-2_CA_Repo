import { filterSearchContainer, profilePostContainer } from "../html-data/post/post-containers.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";

export function scrollToViewPost(postId) {
   const isSearchClicked = loadSessionItem("searchInputValue");
   const isPostId = parseFloat(loadSessionItem("postId"));
   const isFilterClicked = loadSessionItem("filterOptionName");
   const isPostCreated = loadSessionItem("isPostCreated");
   const isPostUpdated = loadSessionItem("isUpdated");
   const isValueTrue = isSearchClicked || isFilterClicked || isPostUpdated || isPostCreated || postId === isPostId;
   if (isValueTrue && window.location.pathname !== "/profile/post/") {
      if (window.location.pathname === "/profile/view/") {
         profilePostContainer.scrollIntoView();
      } else {
         filterSearchContainer.scrollIntoView();
      }
      setInterval(() => {
         if (isSearchClicked) {
            deleteSessionItem("searchInputValue");
         } else if (isFilterClicked) {
            deleteSessionItem("filterOptionName");
         } else if (isPostId) {
            deleteSessionItem("postId");
         } else if (isPostCreated) {
            deleteSessionItem("isPostCreated");
         } else {
            deleteSessionItem("isUpdated");
         }
      }, 3000);
   }
}
