export function validateInputs(formArray) {
   return formArray.every((formElement) => formElement.checkValidity());
}
