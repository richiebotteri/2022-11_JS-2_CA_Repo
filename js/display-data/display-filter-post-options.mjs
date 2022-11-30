import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";

export function displayFilterPostOptions(postAuthor) {
   const filterDropdown = document.querySelector(".dropdown-menu");
   const parser = new DOMParser();
   const parserDocument = parser.parseFromString(
      `
     <li class="dropdown-item">${postAuthor}</li>
  `,
      "text/html"
   );

   const authorNameOption = parserDocument.querySelector(".dropdown-item");
   const childrenObject = filterDropdown.children;
   const isList = Object.values(childrenObject).some(({ innerText }) => innerText === authorNameOption.innerText);
   const isFilterOption = loadSessionItem("filterOptionName");

   if (!isList) {
      filterDropdown.appendChild(authorNameOption);
   }

   if (isFilterOption === "Show all posts") {
      deleteSessionItem("filterOptionName");
   }
}
