export function validateInputs(formArray) {
   const isValid = formArray.every((formElement) => {
      console.log("check", formElement);
      return formElement.checkValidity();
   });

   return isValid;
}
