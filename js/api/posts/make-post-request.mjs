import { SOCIAL_URL } from "../api-environment.mjs";
import * as localStorage from "../../storage/local-storage.mjs";
import { displayPosts } from "./display-posts.mjs";

export async function makePostRequest(postObject, method, action) {
   try {
      let options = {
         method: method,
         headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.loadItem("loginToken")}`,
         },
         body: JSON.stringify(postObject),
      };

      if (method === "get") {
         options = {
            method: method,
            headers: {
               "Content-type": "application/json",
               Authorization: `Bearer ${localStorage.loadItem("loginToken")}`,
            },
         };
      }

      const response = await fetch(`${SOCIAL_URL}${action}`, options);
      const result = await response.json();

      if (method === "get") {
         result.forEach((post) => {
            const profile = localStorage.loadItem("profile");

            // sending posts to get displayed in html
            if (post.author.name === profile.name) {
               displayPosts(post);
            }
         });
      }

      console.log("response:", response);
      console.log("result: ", result);
   } catch (error) {
      console.log(error);
   }
}
