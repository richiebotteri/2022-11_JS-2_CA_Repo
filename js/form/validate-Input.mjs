export function validateInputs(formArray) {
   const isValid = formArray.every((formElement) => {
      return formElement.checkValidity();
   });

   return isValid;
}
