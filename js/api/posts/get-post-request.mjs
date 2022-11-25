import { makePostRequest } from "./make-post-request.mjs";

export function getPost() {
   const method = "get";
   const action = "/posts";
   //  optional data: author, comments, reactions
   const withAuthor = `${action}/?_author=true`;
   const withComments = `${action}/?_comments=true`;
   const withReactions = `${action}/?_reactions=true`;
   const withAllFlags = `${action}/?_author=true&_comments=true&_reactions=true`;
   makePostRequest("", method, withAllFlags);
}
