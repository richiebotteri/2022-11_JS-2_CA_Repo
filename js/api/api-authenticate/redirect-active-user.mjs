import * as storage from "../../storage/local-storage.mjs";

export function redirectIfToken() {
   if (storage.loadItem("loginToken")) {
      window.location = "/profile/";
   }
}
