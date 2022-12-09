// Helpful source to get this working: https://designmodo.com/validate-forms-bootstrap/

export function validatedForms() {
   const formField = document.querySelectorAll(".needs-validation");
   formField.forEach(function (formElements) {
      const validateForm = function (event) {
         if (!formElements.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
         }
         formElements.classList.add("was-validated");
      };

      formElements.addEventListener("submit", validateForm);
   });
}
