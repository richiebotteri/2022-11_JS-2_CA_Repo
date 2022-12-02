import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { toggleComments } from "../../../handlers/posts/comments-handler.mjs";
import { displayPosts } from "../../../display-data/display-posts.mjs";
import { postDropdownHandler } from "../../../handlers/posts/post-dropdown-handler.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";
import { deleteSessionItem, loadSessionItem } from "../../../storage/session-storage.mjs";
import { displayPostChangeFeedback } from "../../../display-data/display-post-change-feedback.mjs";
import { displayFilterPostOptions } from "../../../display-data/display-filter-post-options.mjs";
import { displaySinglePostById } from "../../../display-data/display-single-post-by-id.mjs";
import { changePostVariables } from "../../change-api-data/change-post-variables.mjs";

export async function downloadPostData(method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));
      const result = await response.json();
      const isPostId = parseFloat(loadSessionItem("postId"));
      const isPostDeleted = loadSessionItem("delete");
      const isFilterClicked = loadSessionItem("filterOptionName");

      // looping all posts in result array
      result.forEach((post) => {
         changePostVariables(post, response.ok);
         if (window.location.pathname === "/profile/home-feed/") {
            displayFilterPostOptions(post.author.name);
         }

         // Scroll to created post
         if (post.id === isPostId) {
            const element = document.querySelector(`[data-id="${isPostId}"]`);
            element.scrollIntoView();
            deleteSessionItem("postId");
         }

         // Scroll to filter post
         if (post.author.name === isFilterClicked && window.location.pathname === "/profile/home-feed/") {
            const homeFeed = document.querySelector("#contact-feed");
            homeFeed.scrollIntoView();
         }
      });

      // display deleted post message
      if (isPostDeleted) {
         displayPostChangeFeedback(response.ok);
         deleteSessionItem("delete");
      }

      toggleComments(response.ok);
      postDropdownHandler(response.ok);
   } catch (error) {
      console.log(error);
   }
}
