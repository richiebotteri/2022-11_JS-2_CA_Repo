import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { toggleComments } from "../../../handlers/posts/comments-handler.mjs";
import { displayPosts } from "../../../display-data/display-posts.mjs";
import { postDropdownHandler } from "../../../handlers/posts/post-dropdown-handler.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";
import { deleteSessionItem, loadSessionItem } from "../../../storage/session-storage.mjs";
import { displayPostChangeFeedback } from "../../../display-data/display-post-change-feedback.mjs";

export async function downloadPostData(method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));
      const result = await response.json();
      const isPostId = parseFloat(loadSessionItem("postId"));
      const isPostDeleted = loadSessionItem("delete");

      result.forEach((post) => {
         displayPosts(post);
         if (post.id === isPostId) {
            const element = document.querySelector(`[data-id="${isPostId}"]`);
            element.scrollIntoView();
            deleteSessionItem("postId");
         }
      });

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
