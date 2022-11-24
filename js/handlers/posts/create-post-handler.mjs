import { makePostRequest } from "../../api/post-request/index.mjs";

export function createPostObject() {
   const profileForm = document.querySelector("#profile-form");

   profileForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const tagsArray = form.tags.value.split(" ");
      const postObject = {
         title: form.title.value,
         body: form.textarea.value,
         tags: tagsArray,
         media: form.media.value,
      };

      const method = form.method;
      const action = form.attributes.action.value;

      makePostRequest(postObject, method, action);
   });
}
