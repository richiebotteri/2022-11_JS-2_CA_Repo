import * as noroffAPI from "./api/api-environment.mjs";
import { storeNewAccount } from "./handlers/register-form-handler.mjs";
import { loginAccount } from "./handlers/login-form-handler.mjs";

storeNewAccount();
loginAccount();

console.log(noroffAPI.SOCIAL_URL);
