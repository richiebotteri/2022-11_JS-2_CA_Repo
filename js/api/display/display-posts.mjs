import { loadItem } from "../../storage/local-storage.mjs";
import { changeToHtmlComments } from "../change-api-data/change-comments-data.mjs";
import { changeMediaData } from "../change-api-data/media-changes/change-media-data.mjs";
import { changeAvatarData } from "../change-api-data/change-avatar-data.mjs";
import { changeTagsToSingleTags } from "../change-api-data/tag-changes/change-tags-to-singletags.mjs";
import { changeToHtmlTag } from "../change-api-data/tag-changes/change-tag-to-html.mjs";
import { onlyShowRealUpdates } from "../change-api-data/date-changes/only-show-real-updates.mjs";
import { changeCreatedFormat } from "../change-api-data/date-changes/change-created-format.mjs";
import { changeUpdateFormat } from "../change-api-data/date-changes/change-update-format.mjs";

export function displayPosts(post) {
   const { title, body, tags, media, created, id, updated, author, comments, reactions, _count } = post;
   const tag = changeTagsToSingleTags(tags);
   const htmlTag = changeToHtmlTag(tags);
   const htmlComments = changeToHtmlComments(comments);
   const realDateUpdates = onlyShowRealUpdates(created, updated);
   const newDateCreated = changeCreatedFormat(created);
   const newDateUpdated = changeUpdateFormat(realDateUpdates);
   const newMedia = changeMediaData(media);
   const newAvatar = changeAvatarData(author.avatar, author.name);
   const profilePostField = document.querySelector("#profile-post-field");
   const homePostField = document.querySelector("#home-post-field");
   const profile = loadItem("profile");

   const editPostForm = `
   <!-- Edit Posts -->
   <form action="/posts" method="put" id="edit-post-form" class="w-100 h-100 d-none position-absolute flex-column bg-secondary shadow p-5 z-index needs-validation" novalidate>
      <div class="form-group mb-3 d-flex justify-content-between align-items-center">
         <h2 class="mb-3">Edit post</h2>
         <button type="button" class="btn btn-outline-primary close-edit-btn rounded-circle"><i class="fa-solid fa-xmark"></i></button>
      </div>
       <div class="form-group mb-3">
         <label for="title" class="form-label ps-1 mb-2">
             Title
             <i class="fa-solid fa-star-of-life position-relative fs-8"></i>
         </label>
         <input type="text" class="form-control py-2" id="edit-title" name="title" placeholder="No title in the post." required maxlength="280" value="${title}"/>
       </div>
       <div class="form-group mb-3">
         <label for="textarea" class="form-label ps-1 mb-2">
             Content
             <i class="fa-solid fa-star-of-life position-relative fs-8"></i>
         </label>
         <textarea class="form-control py-2" id="edit-textarea" rows="5" name="textarea" placeholder="No content in the post." required>${body}</textarea>
       </div>
       <div id="media-input-group" class="form-group mb-3">
           <label for="media-input" class="form-label ps-1">Media</label>
           <input type="text" class="form-control py-2" id="edit-media-input" name="media" placeholder="No media in the post." value="${newMedia}"/>
       </div>
       <div id="tag-input-group" class="form-group mb-3">
           <label for="tag-input" class="form-label ps-1 mb-2">Tag</label>
           <input type="text" class="g-col-12 form-control py-2 " id="edit-tag-input" name="tags" placeholder="No tags in the post" value="${tag}"/>
       </div>
       <div class="invalid-feedback bg-danger p-3 mb-2 rounded-2 text-white fw-semibold inline">Please type in a message</div>
       <button type="submit" class="btn w-100 btn-primary mt-3">Update Post</button>
   </form>
`;

   // Post with button to edit and delete post
   const authorPost = `
   <div class="g-col-12 grid bg-secondary shadow mb-6 position-relative">
   ${editPostForm}
      <!-- Post Header -->
      <div class="g-col-12 grid bg-primary p-5">
         <div class="g-col-10 d-flex align-items-center">
         ${newAvatar}
            <h4 id="post-author" class="text-white m-0">${author.name}</h4>
         </div>
         <div class="g-col-2 d-flex justify-content-end align-items-center">
            <button type="button" class="btn btn-outline-light d-flex h-75 align-items-center p-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></button>
            <ul id="post-dropdown-btn" class="dropdown-menu" data-post-id="${id}">
               <li  class="dropdown-item">Delete Post</li>
               <li class="dropdown-item">Edit Post</li>
            </ul>
         </div>
      </div>
      <!-- Post Body -->
      <div class="g-col-12 w-100 m-auto p-5 p-md-5 bg-secondary">
         <div class="card">
            <div class="card-header py-3">
               <h4 class="m-0 fw-semibold">${title}</h4>
            </div>
            <div class="d-flex justify-content-center">
               <img src="${newMedia}" class="img-fluid" alt="" />
            </div>
            <div class="card-body d-flex flex-column">
               <span id="tags">${htmlTag}</span>
               <p class="mb-3 fs-5">${body}</p>
               <div class="d-flex gap-1 flex-wrap border-top pt-3">
                  <button id="add-like-btn" class="btn btn-secondary p-1">
                     <i class="fa-regular fa-thumbs-up text-primary"><span class="px-2 fs-7">${_count.reactions}</span></i>
                  </button>
                  <button id="show-comments-btn" class="btn btn-secondary p-1" data-btn-id="${id}">
                     <i class="fa-solid fa-comment text-primary"><span class="px-2 fs-7">${_count.comments}</span></i>
                  </button>
               </div>
            </div>
            <div class="bg-light-2 border-top d-flex flex-wrap justify-content-between px-5 py-3">
               <p class="fw-light mb-2">${newDateCreated}</p>
               <p class="fw-light m-0">${newDateUpdated}</p>
            </div>
         </div>
      </div>
      <div class="g-col-12 p-5 border-top d-none" data-comments-id="${id}">
         <h4 class="mb-5">Comments</h4>
         ${htmlComments}
      </div>
   </div>
`;

   // Post without button to edit and delete post
   const contactPost = `
      <div class="g-col-12 grid bg-secondary shadow mb-6">
      <!-- Post Header -->
         <div class="g-col-12 grid bg-primary p-5">
            <div class="g-col-10 d-flex align-items-center">
               ${newAvatar}
               <h4 id="post-author" class="text-white m-0">${author.name}</h4>
            </div>
         </div>
         <!-- Post Body -->
         <div class="g-col-12 w-100 m-auto p-5 p-md-5 bg-secondary">
            <div class="card">
               <div class="card-header py-3">
                  <h4 class="m-0 fw-semibold">${title}</h4>
               </div>
               <div class="d-flex justify-content-center">
                  <img src="${newMedia}" class="img-fluid" alt="" />
               </div>
               <div class="card-body d-flex flex-column">
                  <span id="tags">${htmlTag}</span>
                  <p class="mb-3 fs-5">${body}</p>
                  <div class="d-flex gap-1 flex-wrap border-top pt-3">
                     <button id="add-like-btn" class="btn btn-secondary p-1">
                        <i class="fa-regular fa-thumbs-up text-primary"><span class="px-2 fs-7">${_count.reactions}</span></i>
                     </button>
                     <button id="show-comments-btn" class="btn btn-secondary p-1" data-btn-id="${id}">
                        <i class="fa-solid fa-comment text-primary"><span class="px-2 fs-7">${_count.comments}</span></i>
                     </button>
                  </div>
               </div>
               <div class="bg-light-2 border-top d-flex flex-wrap justify-content-between px-5 py-3">
                  <p class="fw-light mb-2"><strong>${newDateCreated}</p>
                  <p class="fw-light m-0"><strong>${newDateUpdated}</p>
               </div>
            </div>
         </div>
         <div class="g-col-12 p-5 border-top d-none" data-comments-id="${id}">
            <h4 class="mb-5">Comments</h4>
            ${htmlComments}
         </div>
      </div>
`;

   if (author.name === profile.name && window.location.pathname === "/profile/view/") {
      profilePostField.innerHTML += authorPost;
   }

   if (author.name === profile.name && window.location.pathname === "/profile/home-feed/") {
      homePostField.innerHTML += authorPost;
   }

   if (author.name !== profile.name && window.location.pathname === "/profile/home-feed/") {
      homePostField.innerHTML += contactPost;
   }
}
