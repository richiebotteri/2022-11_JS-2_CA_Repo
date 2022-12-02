import { uploadPostData } from "../request-call/upload-post-data.mjs";

export function updateRequest(editFormSubmit, editBtn) {
   const { title, textarea, media, tags } = editFormSubmit;
   const tagArray = tags.value.split(" ");
   const method = editFormSubmit.attributes.method.value;
   const action = editFormSubmit.attributes.action.value;
   const postId = editBtn.parentElement.dataset.postId;
   const putAction = `${action}/${postId}`;
   const updatedPostData = {
      title: title.value,
      body: textarea.value,
      tags: tagArray,
      media: media.value,
   };

   uploadPostData(updatedPostData, method, putAction);
}
