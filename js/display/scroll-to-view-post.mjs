import { filterSearchContainer, profilePostContainer } from "../html-data/post/post-containers.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";

export function scrollToViewPost(postId) {
   const isSearchClicked = loadSessionItem("searchInputValue");
   const isPostId = parseFloat(loadSessionItem("postId"));
   const isFilterClicked = loadSessionItem("filterOptionName");
   const isUpdated = loadSessionItem("isUpdated");
   const isClicked = isSearchClicked || isFilterClicked || isUpdated || postId === isPostId;
   if (isClicked && window.location.pathname !== "/profile/post/") {
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
         } else {
            deleteSessionItem("isUpdated");
         }
      }, 3000);
   }
}
