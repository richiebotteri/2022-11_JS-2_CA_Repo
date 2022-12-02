export function displaySinglePostById(post, responseOk) {
   // Get clicked post id from queryString
   const urlParameterString = window.location.search;
   const params = new URLSearchParams(urlParameterString);
   const queryStringId = params.get("id");

   if (responseOk) {
      const { id } = post;
      const singlePostField = document.querySelector("#single-post-field");
      console.log(singlePostField);
      // Display single-post if id match
   }
}
