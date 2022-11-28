export function updateRequest() {
   const postId = deleteBtn.parentElement.dataset.postId;
   const action = `/posts/${postId}`;
   const method = "patch";
   const body = {};
}
