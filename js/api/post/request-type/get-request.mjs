import { downloadPostData } from "../request-call/download-post-data.mjs";

export function getRequest() {
   const method = "get";
   const action = "/posts";

   //  Optional data
   const withAuthor = `_author=true`;
   const withComments = `_comments=true`;
   const withReactions = `_reactions=true`;
   const withAllData = `${action}/?${withAuthor}&${withComments}&${withReactions}`;
   //  Optional Sorting
   const sortByCreated = `sort=created`;
   const sortByTitle = `sort=created`;
   const sortOrderDescending = `sortOrder=desc`;
   const sortOrderAscending = `sortOrder=asc`;

   // Replace variables in actionConfig to change data-output
   const actionConfig = `${withAllData}&${sortByCreated}&${sortOrderAscending}`;
   downloadPostData(method, actionConfig);
}
