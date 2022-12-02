export function changeAvatarData(avatar, authorName, isProfile) {
   const firstLetterName = authorName.substring(0, 1);
   const capitalize = firstLetterName.toUpperCase();

   if (avatar === null || avatar === "") {
      if (isProfile) {
         return `<img src="https://images.pexels.com/photos/11805196/pexels-photo-11805196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="profile-img bg-white border border-secondary border-2 rounded-circle me-4 text-dark d-flex align-items-center justify-content-center fw-bold fs-6"><p class="fs-3 fw-bold mb-1">`;
      } else {
         return `<div class="profile-icon bg-white rounded-circle me-4 text-dark d-flex align-items-center justify-content-center fw-bold fs-6"><span class="fs-4 fw-bold">${capitalize}</span></div>`;
      }
   } else {
      if (isProfile) {
         return `<img src="${avatar}" class="profile-img bg-white border border-secondary border-2 rounded-circle me-4 text-dark d-flex align-items-center justify-content-center fw-bold fs-6"><p class="fs-3 fw-bold mb-1">`;
      } else {
         return `<img src="${avatar}"class="profile-icon bg-white border border-secondary border-2 rounded-circle me-4 text-dark d-flex align-items-center justify-content-center fw-bold fs-6"><p class="fs-3 fw-bold mb-1">`;
      }
   }
}
