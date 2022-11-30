import { validatedForms } from "./form-validation/index.mjs";
import { offlineFeedback } from "./display-data/display-logout-feedback.mjs";
import { postHandlers, signupHandlers } from "./handlers/index.mjs";
import { postRequests } from "./api/posts/index.mjs";

const path = location.pathname;

validatedForms();

if (path === "/profile/view/index.html" || path === "/profile/view/") {
   postHandlers();
   postRequests();
} else if (path === "/profile/home-feed/index.html" || path === "/profile/home-feed/") {
   postHandlers();
   postRequests();
} else {
   offlineFeedback();
   signupHandlers();
}
