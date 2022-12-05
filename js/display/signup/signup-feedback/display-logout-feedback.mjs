import * as sessionStorage from "../../../storage/session-storage.mjs";

// Function that gives feedback when logging out of session

export function offlineFeedback() {
   const isOnline = sessionStorage.loadSessionItem("online");

   if (isOnline === true) {
   } else if (isOnline === false) {
      const offlineFeedback = document.querySelector("#offline-feedback");
      offlineFeedback.classList.remove("d-none");
      setInterval(() => {
         offlineFeedback.classList.add("d-none");
      }, 3500);
   } else {
      console.log("not logged in");
   }
}
