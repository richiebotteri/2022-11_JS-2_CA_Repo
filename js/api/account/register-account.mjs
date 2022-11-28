import { authenticateProfile } from "../auth/authenticate-profile.mjs";

export function registerAccount(registeredFormData) {
   const newUserAccount = {
      name: registeredFormData.name.value,
      email: registeredFormData.email.value,
      password: registeredFormData.password.value,
      banner: registeredFormData.banner.value,
      avatar: registeredFormData.avatar.value,
   };

   const method = registeredFormData.method;
   const action = registeredFormData.attributes.action.value;

   // Calling function to authenticate & register new useraccount on API
   authenticateProfile(newUserAccount, method, action);
}
