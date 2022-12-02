import { loadItem } from "../storage/local-storage.mjs";
import { loadSessionItem } from "../storage/session-storage.mjs";
import * as postContainers from "../html-data/html-containers/post/post-containers.mjs";

export function displayPosts(post) {
   const { id, title, body, tag, dateCreated, dateUpdated, media, author, avatar, comments, reactions, count } = post;
   console.log(id);
   const parser = new DOMParser();
   const parseDocument = parser.parseFromString(
      `
      <div id="author-post" class="g-col-12 grid bg-secondary shadow mb-6 position-relative" data-id="${id}">
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
            <input type="text" class="form-control py-2" id="edit-media-input" name="media" placeholder="No media in the post." value="${media}"/>
         </div>
         <div id="tag-input-group" class="form-group mb-3">
            <label for="tag-input" class="form-label ps-1 mb-2">Tag</label>
            <input type="text" class="g-col-12 form-control py-2 " id="edit-tag-input" name="tags" placeholder="No tags in the post" value="${tag}"/>
         </div>
         <div class="invalid-feedback bg-danger p-3 mb-2 rounded-2 text-white fw-semibold inline">Please type in a message</div>
         <button type="submit" class="btn w-100 btn-primary mt-3">Update Post</button>
      </form>   
      <!-- Post Header -->
      <div class="g-col-12 grid bg-primary p-5">
         <div class="g-col-10 d-flex align-items-center">
            ${avatar}
            <h4 id="post-author" class="text-white m-0">${author}</h4>
         </div>
         <div class="g-col-2 d-flex justify-content-end align-items-center">
            <button type="button" class="btn btn-outline-light d-flex h-75 align-items-center p-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></button>
            <ul id="post-dropdown-btn" class="dropdown-menu" data-post-id="${id}">
               <li  class="dropdown-item">Delete Post</li>
               <li class="dropdown-item">Edit Post</li>
            </ul>
         </div>
         </div>
         ${postBodyWithComments}
      </div>

      <div id="contact-post" class="g-col-12 grid bg-secondary shadow mb-6" data-id="${id}">
         <!-- Post Header -->
            <div class="g-col-12 grid bg-primary p-5">
               <div class="g-col-10 d-flex align-items-center">
                  ${avatar}
                  <h4 id="post-author" class="text-white m-0">${author}</h4>
               </div>
            </div>
            ${postBodyWithComments}
         </div>
      `,
      "text/html"
   );

   const profile = loadItem("profile");
   const filterOptionClicked = loadSessionItem("filterOptionName");
   const homePage = "/profile/home-feed/";
   const viewPage = "/profile/view/";

   if (filterOptionClicked && window.location.pathname === homePage) {
      if (filterOptionClicked === authorName) {
         if (authorName === profile.name) {
            // Generates author-post (with filter-btn) on home-page
            // if filter-name is clicked and sign-in has made a post
            postContainers.homePostContainer.appendChild(parseDocument.getElementById("author-post"));
         } else {
            // Generates contact-post (without filter-btn) on home-page
            // if filter-name is clicked and contact has made a post on homepage
            postContainers.homePostContainer.appendChild(parseDocument.getElementById("contact-post"));
         }
      }
   } else {
      if (authorName === profile.name && window.location.pathname === viewPage) {
         // Generates author-post (with filter-btn) on view-page
         // if sign-in has made a post
         postContainers.profilePostContainer.appendChild(parseDocument.getElementById("author-post"));
      } else if (authorName === profile.name && window.location.pathname === homePage) {
         // Generates author-post (with filter-btn) if it exist on home-page
         postContainers.homePostContainer.appendChild(parseDocument.getElementById("author-post"));
      } else if (authorName !== profile.name && window.location.pathname === homePage) {
         // Generates contact-post (without filter-btn) on view-page,
         // if there is a post not made by the signed in user.
         postContainers.homePostContainer.appendChild(parseDocument.getElementById("contact-post"));
      }
   }
}
