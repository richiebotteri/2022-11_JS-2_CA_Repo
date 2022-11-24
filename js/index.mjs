import * as noroffAPI from "./api/api-environment.mjs";
import { toggleMobileNav } from "./handlers/mobile-nav-toggle/index.mjs";
import { storeNewAccount } from "./handlers/registration/register-form-handler.mjs";
import { loginAccount } from "./handlers/registration/login-form-handler.mjs";
import { logoutAccount } from "./handlers/registration/logout-anchor-handler.mjs";
import { createPostObject } from "./handlers/posts/create-post-handler.mjs";
import { toggleMediaBtn } from "./handlers/posts/media-btn-handler.mjs";
import { offlineFeedback } from "./alert/index.mjs";

const path = location.pathname;

if (path === "/profile/view/") {
   logoutAccount();
   offlineFeedback();
   createPostObject();
   toggleMobileNav();
   toggleMediaBtn();
} else if (path === "/profile/home-feed/") {
   createPostObject();
   toggleMobileNav();
   toggleMediaBtn();
} else {
   storeNewAccount();
   loginAccount();
   offlineFeedback();
}
