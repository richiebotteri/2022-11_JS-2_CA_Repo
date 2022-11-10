const formField = document.querySelectorAll(".needs-validation");

formField.forEach(function (formElements) {
   formElements.addEventListener("submit", function (event) {
      if (!formElements.checkValidity()) {
         event.preventDefault();
         event.stopPropagation();
      }
      formElements.classList.add("was-validated");
   });
});

// Helpful source to get this working: https://designmodo.com/validate-forms-bootstrap/
