import { downloadPostData } from "../request-call/download-post-data.mjs";

export function getRequest() {
   const method = "get";
   const action = "/posts";
   //  optional data: author, comments, reactions
   const withAuthor = `_author=true`;
   const withComments = `_comments=true`;
   const withReactions = `_reactions=true`;
   const withAllData = `${action}/?${withAuthor}&${withComments}&${withReactions}`;
   const sortByCreated = `sort=created`;
   const sortByTitle = `sort=created`;
   const sortOrderDescending = `sortOrder=desc`;
   const sortOrderAscending = `sortOrder=asc`;
   const actionConfiguration = `${withAllData}&${sortByCreated}&${sortOrderAscending}`;
   console.log(actionConfiguration);
   downloadPostData(method, actionConfiguration);
}
