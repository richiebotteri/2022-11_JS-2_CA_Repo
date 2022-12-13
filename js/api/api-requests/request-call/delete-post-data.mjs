import { displayDeletePostFeedback } from "../../../display/post/post-feedback/display-delete-post-feedback.mjs";
import { deleteSessionItem, loadSessionItem } from "../../../storage/session-storage.mjs";
import { SOCIAL_URL } from "../../api-constants/index.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";

export async function deletePostData(method, action, postId) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));

      if (response.ok) {
         const isPostDeleted = loadSessionItem("delete");
         if (isPostDeleted) {
            setTimeout(() => {
               displayDeletePostFeedback("after post deleted", postId);
               deleteSessionItem("delete");
            }, 1500);
         }
      }
   } catch (error) {
      console.log(error);
   }
}
