export function updateRequest(editFormSubmit, editBtn) {
   const { title, textarea, media, tags, method } = editFormSubmit;
   const tagArray = tags.value.split(" ");
   const postId = editBtn.parentElement.dataset.postId;
   const action = `/posts/${postId}`;

   const updatedPostData = {
      title: title.value,
      body: textarea.value,
      tags: tagArray,
      media: media.value,
   };

   console.log(method);
}
