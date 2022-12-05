import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { toggleComments } from "../../../handlers/posts/comments-handler.mjs";
import { postDropdownHandler } from "../../../handlers/posts/post-dropdown-handler.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";
import { deleteSessionItem, loadSessionItem } from "../../../storage/session-storage.mjs";
import { displayPostChangeFeedback } from "../../../display-data/display-post-change-feedback.mjs";
import { changePostVariables } from "../../change-api-data/change-post-variables.mjs";

export async function downloadPostData(method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));
      const result = await response.json();
      const isPostDeleted = loadSessionItem("delete");

      // looping all posts in result array
      result.forEach((post) => {
         changePostVariables(post, response.ok);
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
