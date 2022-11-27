import { downloadPostData } from "../request-call/download-post-data.mjs";

export function getRequest() {
   const method = "get";
   const action = "/posts";
   //  optional data: author, comments, reactions
   const withAuthor = `_author=true`;
   const withComments = `_comments=true`;
   const withReactions = `_reactions=true`;
   const withAllFlags = `${action}/?${withAuthor}&${withComments}&${withReactions}`;

   downloadPostData(method, withAllFlags);
}
