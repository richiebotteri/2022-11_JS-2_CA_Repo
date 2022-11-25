import * as noroffAPI from "./api/api-environment.mjs";
import { validatedForms } from "./form-validation/index.mjs";
import { toggleMobileNav } from "./handlers/mobile-nav-toggle/index.mjs";
import { storeNewAccount } from "./handlers/registration/register-form-handler.mjs";
import { loginAccount } from "./handlers/registration/login-form-handler.mjs";
import { logoutAccount } from "./handlers/registration/logout-anchor-handler.mjs";
import { createPostObject } from "./handlers/posts/create-post-handler.mjs";
import { toggleMediaBtn } from "./handlers/posts/media-btn-handler.mjs";
import { toggleTagBtn } from "./handlers/posts/tag-btn-handler.mjs";
import { toggleComments } from "./handlers/posts/comments-handler.mjs";
import { offlineFeedback } from "./alert/index.mjs";
import { getPost } from "./api/posts/get-post-request.mjs";

const path = location.pathname;

if (path === "/profile/view/") {
   validatedForms();
   logoutAccount();
   offlineFeedback();
   createPostObject();
   toggleMobileNav();
   toggleMediaBtn();
   toggleTagBtn();
   toggleComments();
   getPost();
} else if (path === "/profile/home-feed/") {
   validatedForms();
   createPostObject();
   toggleMobileNav();
   toggleMediaBtn();
   toggleTagBtn();
   toggleComments();
   getPost();
} else {
   validatedForms();
   storeNewAccount();
   loginAccount();
   offlineFeedback();
}
