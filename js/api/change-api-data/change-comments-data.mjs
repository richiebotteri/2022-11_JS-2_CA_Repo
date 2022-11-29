import { changeAvatarData } from "./change-avatar-data.mjs";
import { changeCreatedFormat } from "./date-changes/change-created-format.mjs";

export function changeToHtmlComments(comments) {
   let commentsHtmlArray = "";
   let singleHtmlComments = "";
   commentsHtmlArray = comments.map((comment) => {
      const dateCreated = comment.created;
      const newDateFormat = changeCreatedFormat(dateCreated);
      const avatar = changeAvatarData(comment.author.avatar, comment.author.name);
      console.log(avatar);
      return `
            
                <div class="w-100 d-flex flex-column gap-5 mb-5 card">
                   <div class="card-header bg-primary text-secondary d-flex align-items-center">
                     ${avatar}
                      <h4 id="post-author" class="d-flex align-items-center text-secondary">${comment.owner}</h4>
                   </div>
                   <div class="card-body">
                      <p class="m-0">${comment.body}</p>
                   </div>
                   <div class="card-footer">
                      <p class="fw-light m-0">${newDateFormat}</p>
                   </div>
                </div>
            
       `;
   });

   commentsHtmlArray.forEach((htmlComment) => {
      singleHtmlComments += htmlComment;
   });

   return singleHtmlComments;
}
