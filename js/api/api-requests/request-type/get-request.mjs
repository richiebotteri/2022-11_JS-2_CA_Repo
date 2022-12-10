import { displayGoBackLink } from "../../../display/display-go-back-link.mjs";
import { loadItem } from "../../../storage/local-storage.mjs";
import { loadSessionItem } from "../../../storage/session-storage.mjs";
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

   const allPostActionConfig = `${action}/?${withAllData}&${sortByCreated}`;
   // Downloads all posts
   const userIsLocatedOn = window.location.pathname;
   const authorPostActionConfig = `${authorEndpoint}/?${withAllData}&${sortByCreated}`;

   if (userIsLocatedOn === "/home/") {
      downloadPostData(method, allPostActionConfig);
   }

   // Downloads author posts
   if (userIsLocatedOn === "/profile/") {
      downloadPostData(method, authorPostActionConfig);
   }

   const downloadLocation = loadSessionItem("downloadLocation");
   const downloadResponseStatus = loadSessionItem("downloadResponseStatus");

   // switching action-config to ensure single-post gets displays
   if (downloadResponseStatus && userIsLocatedOn === "/post/") {
      if (downloadLocation === "/home/") {
         displayGoBackLink(downloadLocation);
         downloadPostData(method, allPostActionConfig);
         return;
      }
      if (downloadLocation === "/profile/") {
         displayGoBackLink(downloadLocation);
         console.log("here");
         downloadPostData(method, authorPostActionConfig);
         return;
      }
   }
}
