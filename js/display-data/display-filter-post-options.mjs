import { createParseDoc } from "../html-data/createParseDoc.mjs";
import { deleteSessionItem, loadSessionItem } from "../storage/session-storage.mjs";

export function displayFilterPostOptions(postAuthor) {
   const filterDropdown = document.querySelector(".dropdown-menu");
   const menuItem = `<li class="dropdown-item">${postAuthor}</li>`;
   const parserDocument = createParseDoc(menuItem);
   const authorNameOption = parserDocument.querySelector(".dropdown-item");
   const childrenObject = filterDropdown.children;
   const isList = Object.values(childrenObject).some(({ innerText }) => innerText === authorNameOption.innerText);
   const isFilterOption = loadSessionItem("filterOptionName");

   if (!isList) {
      filterDropdown.appendChild(authorNameOption);
   }

   if (isFilterOption === "show all posts") {
      deleteSessionItem("filterOptionName");
   }
}
