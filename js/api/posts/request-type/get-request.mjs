import { downloadPostData } from "../request-call/download-post-data.mjs";

export function getRequest() {
   const method = "get";
   const action = "/posts";
   //  optional data: author, comments, reactions
   const withAuthor = `${action}/?_author=true`;
   const withComments = `${action}/?_comments=true`;
   const withReactions = `${action}/?_reactions=true`;
   const withAllFlags = `${action}/?_author=true&_comments=true&_reactions=true`;

   downloadPostData(method, withAllFlags);
}
