import { changeAvatarData } from "../../api/api-data/change-avatar-data.mjs";
import { createParseDoc } from "../../html-data/createParseDoc.mjs";
import { loadItem } from "../../storage/local-storage.mjs";

export function displayProfileData() {
   const profile = loadItem("profile");
   const profileName = profile.name;
   const profileAvatar = profile.avatar;
   const newAvatarElement = changeAvatarData(profileAvatar, profileName);

   const htmlElements = `${newAvatarElement}
   <h1 class="text-center text-sm-center mt-5 text-secondary fw-semibold">${profileName}</h1>
   <p id="about-description"class="mt-2">Hi i'm <span class="fw-semibold">${profileName}</span>, I'm a new on this platform, looking to find some new friends. See you!</p>
   `;
   const parseDocument = createParseDoc(htmlElements);

   const profileAvatarElement = parseDocument.querySelector("img");
   profileAvatarElement.classList.replace("profile-icon", "profile-img");

   const profileNameElement = parseDocument.querySelector("h1");
   const profileAboutElement = parseDocument.querySelector("#about-description");

   const profileHeaderSection = document.querySelector("#profile-header");
   const profileAboutSection = document.querySelector("#profile-about");

   profileHeaderSection.appendChild(profileAvatarElement);
   profileHeaderSection.appendChild(profileNameElement);
   profileAboutSection.appendChild(profileAboutElement);
}
