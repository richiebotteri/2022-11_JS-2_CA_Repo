export function displayGoBackLink(userIsLocatedOn) {
   const goBackLink = document.createElement("a");
   goBackLink.classList.add("g-col-12");
   goBackLink.href = userIsLocatedOn;
   goBackLink.innerText = "Go Back";
   const postContentContainer = document.querySelector("#main-content");
   postContentContainer.prepend(goBackLink);
}
