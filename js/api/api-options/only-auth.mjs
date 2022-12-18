import { loadItem } from "../../storage/local-storage.mjs";

export function optionWithToken(method) {
   const option = {
      method: method,
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${loadItem("loginToken")}`,
      },
   };

   return option;
}
