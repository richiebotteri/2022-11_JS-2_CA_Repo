export function searchInputHandler() {
   const searchForum = document.querySelector("[data-search-form]");
   searchForum.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(searchForum.search.value);
   });
}
