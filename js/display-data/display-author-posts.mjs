import { homePostContainer, profilePostContainer } from "../html-data/post/post-containers.mjs";

export function displayAuthorPost(parsedAuthorPost) {
   homePostContainer.appendChild(parsedAuthorPost);
}
