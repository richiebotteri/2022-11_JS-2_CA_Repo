import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { toggleComments } from "../../../handlers/posts/comments-handler.mjs";
import { displayPosts } from "../../../display-data/display-posts.mjs";
import { postDropdownHandler } from "../../../handlers/posts/post-dropdown-handler.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";
import { deleteSessionItem, loadSessionItem } from "../../../storage/session-storage.mjs";
import { displayPostChangeFeedback } from "../../../display-data/display-post-change-feedback.mjs";
import { filterPostHandler } from "../../../handlers/posts/filter-posts-handler.mjs";

export async function downloadPostData(method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));
      const result = await response.json();
      const isPostId = parseFloat(loadSessionItem("postId"));
      const isPostDeleted = loadSessionItem("delete");

      // looping all posts in result array
      result.forEach((post) => {
         displayPosts(post);
         filterPostHandler(post.author.name);

         // Scroll to new post
         if (post.id === isPostId) {
            const element = document.querySelector(`[data-id="${isPostId}"]`);
            element.scrollIntoView();
            deleteSessionItem("postId");
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
