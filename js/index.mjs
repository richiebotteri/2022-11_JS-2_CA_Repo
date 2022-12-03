import { validatedForms } from "./form-validation/index.mjs";
import { offlineFeedback } from "./display-data/display-logout-feedback.mjs";
import { findPostsHandlers, postHandlers, signupHandlers } from "./handlers/index.mjs";
import { displayProfileData } from "./display-data/display-profile-data.mjs";
import { getRequest } from "./api/post/request-type/get-request.mjs";

const path = location.pathname;

validatedForms();
if (path === "/profile/view/index.html" || path === "/profile/view/") {
   postHandlers();
   getRequest();
   displayProfileData();
} else if (path === "/profile/home-feed/index.html" || path === "/profile/home-feed/") {
   postHandlers();
   getRequest();
   findPostsHandlers();
} else if (path === "/profile/post/index.html" || path === "/profile/post/") {
   getRequest();
} else if (path === "/profile/register/index.html" || path === "/profile/register/") {
   offlineFeedback();
   signupHandlers();
}
