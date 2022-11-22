import * as noroffAPI from "./api/api-environment.mjs";
import { storeNewAccount } from "./handlers/register-form-handler.mjs";

storeNewAccount();

console.log(noroffAPI.SOCIAL_URL);
