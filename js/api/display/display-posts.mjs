import { changeToHtmlComments } from "./mutate/mutate-comments-data.mjs";
import { changeToHtmlTags } from "./mutate/mutate-tags-data.mjs";
import { changeMediaData } from "./mutate/mutate-media-data.mjs";
import { loadItem } from "../../storage/local-storage.mjs";
import { changeAvatarData } from "./mutate/mutate-avatar-data.mjs";
import { filterMediaUrl } from "./mutate/filter-media-url.mjs";

export function displayPosts(post) {
   const { title, body, tags, media, created, id, updated, author, comments, reactions, _count } = post;

   const singleTags = changeToHtmlTags(tags);
   const htmlComments = changeToHtmlComments(comments);
   const newDateCreated = new Date(created);
   const newDateUpdated = new Date(updated);
   const newMedia = changeMediaData(media);
   // const filteredMedia = filterMediaUrl(newMedia);
   const newAvatar = changeAvatarData(author.avatar, author.name);
   const profilePostField = document.querySelector("#profile-post-field");
   const homePostField = document.querySelector("#home-post-field");
   const profile = loadItem("profile");

   // Post with button to edit and delete post
   const authorPost = `
   <div class="g-col-12 grid bg-secondary shadow mb-6">
      <!-- Post Header -->
      <div class="g-col-12 grid bg-primary p-5">
         <div class="g-col-10 d-flex align-items-center">
         ${newAvatar}
            <h4 id="post-author" class="text-white m-0">${author.name}</h4>
         </div>
         <div class="g-col-2 d-flex justify-content-end align-items-center">
            <button type="button" class="btn btn-outline-light d-flex h-75 align-items-center p-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></button>
            <ul class="dropdown-menu">
               <li class="dropdown-item">Delete Post</li>
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
               <span id="tags">${singleTags}</span>
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
               <p class="fw-light m-0">Created: ${newDateCreated.toLocaleDateString()}</p>
               <p class="fw-light m-0">Updated: ${newDateUpdated.toLocaleDateString()}</p>
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
                  <span id="tags">${singleTags}</span>
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
                  <p class="fw-light m-0">Created: ${newDateCreated.toLocaleDateString()}</p>
                  <p class="fw-light m-0">Updated: ${newDateUpdated.toLocaleDateString()}</p>
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
