import { toggleMobileNav } from "./mobile-nav-toggle/index.mjs";
import { toggleComments } from "./posts/comments-handler.mjs";
import { toggleMediaBtn } from "./posts/media-btn-handler.mjs";
import { toggleTagBtn } from "./posts/tag-btn-handler.mjs";
import { createPostHandler } from "./posts/create-post-handler.mjs";
import { logoutAnchorAccount } from "./registration/logout-anchor-handler.mjs";
import { loginFormHandler } from "./registration/login-form-handler.mjs";
import { registerFormHandler } from "./registration/register-form-handler.mjs";
import { filterPostHandler } from "./posts/filter-posts-handler.mjs";
import { searchInputHandler } from "./search/search-input-handler.mjs";

/**
 * Calls nav- & button-event-handlers for when user is logged in and toggles comments-btn, media-btn, tag-button, creates-post-btn or logout-btn.
 * @export
 * @module triggerPostHandlers
 */
export function postHandlers() {
   toggleComments();
   toggleMediaBtn();
   toggleTagBtn();
   createPostHandler();
   logoutAnchorAccount();
}

/**
 * Calls find posts event-handlers for when user is logged in and searches or chooses a filter-option to find specific posts.
 * @export
 * @module triggerFindPostHandlers
 */
export function findPostsHandlers() {
   searchInputHandler();
   filterPostHandler();
}

/**
 * Calls signup event-handlers for when user logs in or register account
 * @export
 * @module triggerSignupHandlers
 */
export function signupHandlers() {
   registerFormHandler();
   loginFormHandler();
}
