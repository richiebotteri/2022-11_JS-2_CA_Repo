import { createParseDoc } from "../createParseDoc.mjs";
import { routeToDisplayPost } from "../../display-data/route-to-display-post.mjs";
export function changeToHtmlPost(postVariables) {
   const { id, title, body, tagString, htmlTag, dateCreated, dateUpdated, media, author, avatar, comments, reactions, count } = postVariables;

   const editForm = `
    <form action="/posts" method="put" id="edit-post-form" class="g-col-12 d-none bg-secondary flex-column bg-secondary  p-5 z-index border-bottom  needs-validation" novalidate>
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
          <input type="text" class="g-col-12 form-control py-2 " id="edit-tag-input" name="tags" placeholder="No tags in the post" value="${tagString}"/>
      </div>
      <div class="invalid-feedback bg-danger p-3 mb-2 rounded-2 text-white fw-semibold inline">Please type in a message</div>
      <button type="submit" class="btn w-100 btn-primary mt-3">Update Post</button>
    </form>   
    `;

   const filterBtn = `
    <div class="g-col-2 d-flex justify-content-end align-items-center pe-5">
        <button type="button" class="btn btn-outline-light d-flex h-50 align-items-center dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></button>
        <ul id="post-dropdown-btn" class="dropdown-menu" data-post-id="${id}">
          <li  class="dropdown-item">Delete Post</li>
          <li class="dropdown-item">Edit Post</li>
        </ul>
    </div>
    `;

   const postCommentSection = `
    <div class="g-col-12 p-5 border-top d-none bg-secondary" data-comments-id="${id}">
      <div class="d-flex flex-column gap-5 p-5">
        <h4>Comments</h4>
        ${comments}
      </div>
    </div>
     `;

   const postBodySection = `
  <div class="g-col-12 w-100 m-auto p-5 p-md-5 bg-secondary">
  <div class="card">
        <div class="card-header py-3 d-flex justify-content-between">
          <h4 class="m-0 fw-semibold">${title}</h4>
          <a href="/profile/post/?id=${id}" class="d-flex align-items-center gap-2 nav-link">View post <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        <div class="d-flex justify-content-center">
          <img src="${media}" class="img-fluid" alt="" />
        </div>
        <div class="card-body border-top">
          ${htmlTag}
          <p class="my-3 fs-5">${body}</p>
          <div class="d-flex gap-1 flex-wrap border-top pt-3">
              <button id="add-like-btn" class="btn btn-secondary p-1">
                <i class="fa-regular fa-thumbs-up text-primary"><span class="px-2 fs-7">${count.reactions}</span></i>
              </button>
              <button id="show-comments-btn" class="btn btn-secondary p-1" data-btn-id="${id}">
                <i class="fa-solid fa-comment text-primary"><span class="px-2 fs-7">${count.comments}</span></i>
              </button>
          </div>
        </div>
        <div class="bg-light-2 border-top d-flex flex-wrap justify-content-between px-5 py-3">
          <p class="fw-light mb-2">${dateCreated}</p>
          <p class="fw-light m-0">${dateUpdated}</p>
        </div>
    </div>
  </div>
  `;

   const authorPost = `
      <div class="author-post g-col-12 grid bg-primary shadow mb-6" data-id="${id}">
        <div class="g-col-10 d-flex align-items-center p-5">
            ${avatar}
            <h4 id="post-author" class="text-white m-0">${author}</h4>
        </div>
        <!-- Post Filter -->
        ${filterBtn}
        <!-- Post Body -->
        ${editForm}
        ${postBodySection}
        <!-- Post Comment -->
        ${postCommentSection}
      </div>
   `;

   const contactPost = `
      <div class="contact-post g-col-12 grid bg-primary shadow mb-6 position-relative" data-id="${id}">
        <div class="g-col-10 d-flex align-items-center p-5">
            ${avatar}
            <h4 id="post-author" class="text-white m-0">${author}</h4>
        </div>
        <!-- Post Body -->
        ${postBodySection}
        <!-- Post Comment -->
        ${postCommentSection}
      </div>
`;

   const parsedContactPost = createParseDoc(contactPost).querySelector(`.contact-post`);
   const parsedAuthorPost = createParseDoc(authorPost).querySelector(`.author-post`);

   routeToDisplayPost(parsedAuthorPost, parsedContactPost, author, id, tagString);
}
