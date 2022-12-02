export function displaySinglePostById() {
   const urlParameterString = window.location.search;
   console.log(urlParameterString);
   const params = new URLSearchParams(urlParameterString);
   const id = params.get("id");
   console.log(id);
}
