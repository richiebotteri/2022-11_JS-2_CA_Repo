import { loadItem } from "../../../storage/local-storage.mjs";
// import { downloadAuthorPosts } from "../request-call/download-author-posts.mjs";
import { downloadPostData } from "../request-call/download-post-data.mjs";

export function getRequest() {
   const method = "get";
   const action = "/posts";

   // Author posts endpoint to bypass 100 post max download
   const loggedInUser = loadItem("profile").name;
   const authorEndpoint = `/profiles/${loggedInUser}/posts`;

   //  Optional data
   const withAuthor = `_author=true`;
   const withComments = `_comments=true`;
   const withReactions = `_reactions=true`;
   const withAllData = `${withAuthor}&${withComments}&${withReactions}`;
   //  Optional Sorting
   const sortByCreated = `sort=created`;
   const sortByTitle = `sort=created`;
   const sortOrderDescending = `sortOrder=desc`;
   const sortOrderAscending = `sortOrder=asc`;

   // Replace variables in actionConfig to change data-output
   const path = window.location.pathname;
   if (path === "/home/" || path === "/post/") {
      const allPostActionConfig = `${action}/?${withAllData}&${sortByCreated}&${sortOrderDescending}`;
      downloadPostData(method, allPostActionConfig);
   }
   if (path === "/profile/" || path === "/post/") {
      const authorPostActionConfig = `${authorEndpoint}/?${withAllData}&${sortByCreated}&${sortOrderDescending}`;
      downloadPostData(method, authorPostActionConfig);
   }
}
