import * as sessionStorage from "../storage/session-storage.mjs";

// Function that gives feedback when logging out of session

export function offlineFeedback() {
   if (sessionStorage.loadItem("online") === true) {
      console.log("i am online");
   } else if (sessionStorage.loadItem("online") === false) {
      const offlineFeedback = document.querySelector("#offline-feedback");
      offlineFeedback.classList.remove("d-none");
      setInterval(() => {
         offlineFeedback.classList.add("d-none");
      }, 3500);
   } else {
      console.log("not logged in");
   }
}
