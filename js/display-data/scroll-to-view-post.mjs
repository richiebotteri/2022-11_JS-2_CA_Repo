import { deletePostData } from "../api/post/request-call/delete-post-data.mjs";
import { filterSearchContainer } from "../html-data/post/post-containers.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";

export function scrollToViewPost(postId, postAuthorName) {
   const isSearchClicked = loadSessionItem("searchInputValue");
   const isPostId = parseFloat(loadSessionItem("postId"));
   const isFilterClicked = loadSessionItem("filterOptionName");

   if (isSearchClicked || isFilterClicked) {
      filterSearchContainer.scrollIntoView();
      setInterval(() => {
         if (isSearchClicked) {
            deleteSessionItem("searchInputValue");
         } else {
            deleteSessionItem("filterOptionName");
         }
      }, 2000);
   }

   // Scroll to created post
   if (postId === isPostId) {
      deleteSessionItem("postId");
   }
}
