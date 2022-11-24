import * as storage from "./local-storage.mjs";
import * as sessionStorage from "./session-storage.mjs";

export function removeProfileFromStorage() {
   storage.deleteItem("loginToken");
   storage.deleteItem("profile");
   sessionStorage.saveItem("online", false);
}
