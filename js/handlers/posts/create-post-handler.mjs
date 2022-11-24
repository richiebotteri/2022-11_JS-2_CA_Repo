import { makePostRequest } from "../../api/post-request/index.mjs";

export function createPostObject() {
   const profileForm = document.querySelector("#profile-form");

   profileForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const postObject = {
         title: form.title.value,
         body: form.textarea.value,
      };

      const method = form.method;
      const action = form.attributes.action.value;

      makePostRequest(postObject, method, action);
   });
}
