export function createPostHandler() {
   const profileForm = document.querySelector("#profile-form");

   profileForm.addEventListener((event) => {
      event.preventDefault();
      console.log(event);
   });
}
