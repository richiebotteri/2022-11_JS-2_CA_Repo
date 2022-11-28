import { loadItem } from "../../storage/local-storage.mjs";

export function optionWithContent(postObject, method) {
   const option = {
      method: method,
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${loadItem("loginToken")}`,
      },
      body: JSON.stringify(postObject),
   };

   return option;
}
