import * as storage from "../../storage/index.mjs";

export function redirectIfToken(token) {
   if (storage.loadItem("loginToken") === token) {
      window.location = "/profile/view";
   } else {
      console.log("you have not logged in");
   }
}
