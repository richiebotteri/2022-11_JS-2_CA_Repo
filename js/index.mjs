import { validatedForms } from "./form-validation/index.mjs";
import { offlineFeedback } from "./display-data/display-logout-feedback.mjs";
import { findPostsHandlers, postHandlers, signupHandlers } from "./handlers/index.mjs";
import { postRequests } from "./api/posts/index.mjs";
import { displayProfileData } from "./display-data/display-profile-data.mjs";
import { displaySinglePostById } from "./display-data/display-single-post-by-id.mjs";

const path = location.pathname;

validatedForms();

if (path === "/profile/view/index.html" || path === "/profile/view/") {
   postHandlers();
   postRequests();
   displayProfileData();
} else if (path === "/profile/home-feed/index.html" || path === "/profile/home-feed/") {
   postHandlers();
   postRequests();
   findPostsHandlers();
} else if (path === "/profile/post/index.html" || "/profile/post/" || "/profile/post/?id=109") {
   displaySinglePostById();
   postRequests();
} else {
   offlineFeedback();
   signupHandlers();
}
