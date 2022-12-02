import { saveSessionItem } from "../../../storage/session-storage.mjs";
import { deletePostData } from "../request-call/delete-post-data.mjs";

export function deleteRequest(deleteBtn) {
   saveSessionItem("delete", true);
   const postId = deleteBtn.parentElement.dataset.postId;
   const action = `/posts/${postId}`;
   const method = "delete";

   deletePostData(method, action);
}
