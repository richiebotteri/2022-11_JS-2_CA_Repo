import { SOCIAL_URL } from "../../constants/api-prefix-constants.mjs";
import { toggleComments } from "../../../handlers/posts/comments-handler.mjs";
import { displayPosts } from "../../display/display-posts.mjs";
import { postDropdownHandler } from "../../../handlers/posts/post-dropdown-handler.mjs";
import { optionWithToken } from "../../api-options/only-auth.mjs";

export async function downloadPostData(method, action) {
   try {
      const response = await fetch(`${SOCIAL_URL}${action}`, optionWithToken(method));
      const result = await response.json();
      result.forEach((post) => {
         displayPosts(post);
      });

      toggleComments(response.ok);
      postDropdownHandler(response.ok);
   } catch (error) {
      console.log(error);
   }
}
