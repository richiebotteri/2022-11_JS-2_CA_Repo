import { saveItem } from "../../storage/local-storage.mjs";
import { saveSessionItem } from "../../storage/session-storage.mjs";

export function savingLoginProfile(result) {
   const { accessToken, ...profile } = result;
   const { email, name } = profile;
   const changeProfileFormat = {
      email: email.toLowerCase(),
      name: name.toLowerCase(),
   };

   //  updating profile object with new data-format from changeProfileFormat
   Object.assign(profile, changeProfileFormat);

   saveItem("loginToken", accessToken);
   saveItem("profile", profile);
   saveSessionItem("online", true);
}
