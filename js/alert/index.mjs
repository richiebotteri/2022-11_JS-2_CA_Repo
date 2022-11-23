import * as storage from "../storage/index.mjs";

const offlineFeedback = document.querySelector("#offline-feedback");
const onlineFeedback = document.querySelector("#online-feedback");

if (storage.loadItem("loginToken")) {
   onlineFeedback.classList.remove("d-none");

   setTimeout(() => {
      onlineFeedback.classList.add("d-none");
   }, 3000);
} else {
   offlineFeedback.classList.remove("d-none");
   setTimeout(() => {
      offlineFeedback.classList.add("d-none");
   }, 3000);
}

// How do i not show a message if the user does not exist?
