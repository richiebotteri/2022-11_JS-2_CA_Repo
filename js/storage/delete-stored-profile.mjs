import * as storage from "./index.mjs";

export function removeProfileFromStorage() {
   storage.deleteItem("loginToken");
   storage.deleteItem("profile");
}
