import * as storage from "../../storage/local-storage.mjs";

export function redirectIfToken(token) {
   if (storage.loadItem("loginToken") === token) {
      window.location = "/profile/view";
   }
}
