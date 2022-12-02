import { loadItem } from "../storage/local-storage.mjs";
import { loadSessionItem } from "../storage/session-storage.mjs";
import * as postContainers from "../html-data/post/post-containers.mjs";

export function displayPosts(authorPost, contactPost, author) {
   const profile = loadItem("profile");
   const filterOptionClicked = loadSessionItem("filterOptionName");
   const homePage = "/profile/home-feed/";
   const viewPage = "/profile/view/";

   if (filterOptionClicked && window.location.pathname === homePage) {
      if (filterOptionClicked === author) {
         if (author === profile.name) {
            // Generates author-post (with filter-btn) on home-page
            // if filter-name is clicked and sign-in has made a post
            postContainers.homePostContainer.appendChild(authorPost);
         } else {
            // Generates contact-post (without filter-btn) on home-page
            // if filter-name is clicked and contact has made a post on homepage
            postContainers.homePostContainer.appendChild(contactPost);
         }
      }
   } else {
      if (author === profile.name && window.location.pathname === viewPage) {
         // Generates author-post (with filter-btn) on view-page
         // if sign-in has made a post
         postContainers.profilePostContainer.appendChild(authorPost);
      } else if (author === profile.name && window.location.pathname === homePage) {
         // Generates author-post (with filter-btn) if it exist on home-page
         postContainers.homePostContainer.appendChild(authorPost);
      } else if (author !== profile.name && window.location.pathname === homePage) {
         // Generates contact-post (without filter-btn) on view-page,
         // if there is a post not made by the signed in user.
         postContainers.homePostContainer.appendChild(contactPost);
      }
   }
}
