import { uploadPostData } from "../request-call/upload-post-data.mjs";

export function createRequest(event) {
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
   console.log(postObject, method, action);
   uploadPostData(postObject, method, action);
}
