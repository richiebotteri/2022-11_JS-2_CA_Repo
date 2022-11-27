export function changeToHtmlComments(comments) {
   let commentsHtmlArray = "";
   let singleHtmlComments = "";

   commentsHtmlArray = comments.map((comment) => {
      const dateCreated = comment.created;
      const newDateFormat = new Date(dateCreated);
      const dateFormat = newDateFormat.toLocaleDateString();
      return `
             <div id="comments" class="grid gap-5 mb-5">
                <div class="g-col-12 card">
                   <div class="card-header d-flex align-items-center">
                      <div class="profile-icon bg-primary d-inline-block rounded-circle me-4 text-secondary d-flex align-items-center justify-content-center fw-bold fs-6">RB</div>
                      <h4 id="post-author" class="d-flex align-items-center text-primary">${comment.owner}</h4>
                   </div>
                   <div class="card-body">
                      <p class="m-0">${comment.body}</p>
                   </div>
                   <div class="card-footer">
                      <p class="fw-light m-0">Created:${dateFormat}</p>
                   </div>
                </div>
             </div>
       `;
   });
   return commentsHtmlArray;
}
