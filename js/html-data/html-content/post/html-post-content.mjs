function changePostVariables(post) {
   const postBodyWithComments = `
        <!-- Post Body -->
        <div class="g-col-12 w-100 m-auto p-5 p-md-5 bg-secondary">
          <div class="card">
              <div class="card-header py-3 d-flex justify-content-between">
                <h4 class="m-0 fw-semibold">${title}</h4>
                <a href="/profile/post/?id=${id}" class="d-flex align-items-center gap-2 nav-link">View post <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
              <div class="d-flex justify-content-center">
                <img src="${newMedia}" class="img-fluid" alt="" />
              </div>
              <div class="card-body d-flex flex-column border-top">
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
          <div class="d-flex flex-column gap-5 p-5">
              <h4>Comments</h4>
              ${htmlComments}
          </div>
        </div>`;
}
