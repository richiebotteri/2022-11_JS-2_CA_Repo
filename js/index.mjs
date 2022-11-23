import * as noroffAPI from "./api/api-environment.mjs";
import { storeNewAccount } from "./handlers/register-form-handler.mjs";
import { loginAccount } from "./handlers/login-form-handler.mjs";
import { logoutAccount } from "./handlers/logout-anchor-handler.mjs";
import { offlineFeedback } from "./alert/index.mjs";

const path = location.pathname;

if (path === "/profile/view/") {
   logoutAccount();
   offlineFeedback();
} else {
   storeNewAccount();
   loginAccount();
   offlineFeedback();
}
