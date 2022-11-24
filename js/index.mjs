import * as noroffAPI from "./api/api-environment.mjs";
import { toggleMobileNav } from "./handlers/mobile-nav-toggle/index.mjs";
import { validatedForms } from "./form-validation/index.mjs";
import { storeNewAccount } from "./handlers/registration/register-form-handler.mjs";
import { loginAccount } from "./handlers/registration/login-form-handler.mjs";
import { logoutAccount } from "./handlers/registration/logout-anchor-handler.mjs";
import { createPostObject } from "./handlers/posts/create-post-handler.mjs";
import { toggleMediaBtn } from "./handlers/posts/media-btn-handler.mjs";
import { toggleTagBtn } from "./handlers/posts/tag-btn-handler.mjs";
import { offlineFeedback } from "./alert/index.mjs";

const path = location.pathname;

if (path === "/profile/view/") {
   validatedForms();
   logoutAccount();
   offlineFeedback();
   createPostObject();
   toggleMobileNav();
   toggleMediaBtn();
   toggleTagBtn();
} else if (path === "/profile/home-feed/") {
   validatedForms();
   createPostObject();
   toggleMobileNav();
   toggleMediaBtn();
   toggleTagBtn();
} else {
   validatedForms();
   storeNewAccount();
   loginAccount();
   offlineFeedback();
}
