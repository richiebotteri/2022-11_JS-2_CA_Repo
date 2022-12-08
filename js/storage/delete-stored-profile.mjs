import * as storage from "./local-storage.mjs";
import * as sessionStorage from "./session-storage.mjs";

/**
 * Remove profile-object from sessionStorage
 * @example
 *```js
 * // deletes Token used to grant
 * // user access to there profile
 * storage.deleteItem("loginToken");
 *
 * // deletes profile with username,
 * // email, avatar & banner
 * storage.deleteItem("profile");
 *
 * //Saves a boolean value of true to
 * //the sessionsStorage to indicate
 * //that account is not online
 * sessionStorage.saveSessionItem("online", false);
 *```
 */
export function removeProfileFromStorage() {
   storage.deleteItem("loginToken");
   storage.deleteItem("profile");
   sessionStorage.saveSessionItem("online", false);
}
