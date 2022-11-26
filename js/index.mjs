import { validatedForms } from "./form-validation/index.mjs";
import { offlineFeedback } from "./alert/index.mjs";
import { postHandlers, signupHandlers } from "./handlers/index.mjs";

const path = location.pathname;
console.log(path);

validatedForms();

if (path === "/profile/view/index.html") {
   postHandlers();
} else if (path === "/profile/home-feed/") {
   postHandlers();
} else {
   offlineFeedback();
   signupHandlers();
}
