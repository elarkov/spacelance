
export function validateField() {
  const allForms = document.querySelectorAll('form');
  allForms.forEach(function (form) {
    let validate = {
      text: null,
      textNumberOfInputsInTheForm: 0,
    };

    const inputs = form.querySelectorAll("input");
    const inputSubmit = form.querySelector("button[type=submit]");
    const inputsText = form.querySelectorAll("input[type=text]");

    inputs.forEach(function (input) {
      if (input) {
        if (input.type.toLowerCase() === "text") {
          validate.textNumberOfInputsInTheForm = inputsText.length;
        }
        input.addEventListener("input", () => {
          input.classList.remove("form-error");
          let inputType = input.type.toLowerCase();
          switch (inputType) {
            case "text":
              validate.textTheNumberOfCompletedInputsInTheForm = 0;
              inputsText.forEach((inputText) => {
                if (inputText.value.length > 1) {
                  validate.textTheNumberOfCompletedInputsInTheForm++;
                  if (validate.textNumberOfInputsInTheForm === validate.textTheNumberOfCompletedInputsInTheForm) {
                    validate.text = true;
                  }
                } else {
                  validate.text = false;
                }
              });
              break;
            default:
              break;
          }
          if (validate.text) {
            inputSubmit.disabled = false;
          } else {
            inputSubmit.disabled = true;
          }
        });
        input.addEventListener("change", () => {
          let inputType = input.type.toLowerCase();
          switch (inputType) {
            case "text":
              if (input.value.length < 2) {
                input.classList.add("form-error");
              }
              break;
            default:
              break;
          }
        });
      }
    });

  });
}