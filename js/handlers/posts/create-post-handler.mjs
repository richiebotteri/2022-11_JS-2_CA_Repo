import { createRequest } from "../../api/posts/request-type/create-request.mjs";

export function createPostHandler() {
   const createPostForm = document.querySelector("#create-post-form");
   createPostForm.addEventListener("submit", (event) => {
      event.preventDefault();
      createRequest(event);
   });
}
