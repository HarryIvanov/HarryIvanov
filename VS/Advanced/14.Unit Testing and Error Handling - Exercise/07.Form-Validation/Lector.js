function validate() {
  const companyField = document.getElementById("companyInfo");
  const companyCheck = document.getElementById("company");
  const form = document.getElementById("registerForm");

  companyCheck.addEventListener("change", () => {
    if (companyCheck.checked) {
      companyField.style.display = "block";
    } else {
      companyField.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userNameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rePasswordInput = document.getElementById("confirm-password");
    const companyNumberInput = document.getElementById("companyNumber");
    const validField = document.getElementById("valid");
    const userNamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const passwordPattern = /^[\w]{5,15}$/;
    const emailPattern = /.*@.*\..*/;
    let usernameIsValid = false;
    let passIsValid = false;
    let rePassIsValid = false;
    let emailIsValid = false;
    let companyNumberIsValid = false;

    if (userNamePattern.test(userNameInput.value)) {
      usernameIsValid = true;
    }
    if (emailPattern.test(emailInput.value)) {
      emailIsValid = true;
    }
    if (
      passwordPattern.test(passwordInput.value) &&
      passwordInput.value == rePasswordInput.value
    ) {
        passIsValid = true;
        rePassIsValid = true;
    }
    if (companyCheck.checked) {
        if (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999) {
            companyNumberIsValid = true;
        }
    } else {
        companyNumberIsValid = true;
    }
    if (usernameIsValid && passIsValid && rePassIsValid && emailIsValid && companyNumberIsValid) {
        validField.style.display = "block";
    }
    if (!usernameIsValid) {
        userNameInput.style.borderColor = "red";
    }
    if (!emailIsValid) {
        emailInput.style.borderColor = "red";
    }
    if (!passIsValid) {
        passwordInput.style.borderColor = "red";
    }
    if (!rePassIsValid) {
        rePasswordInput.style.borderColor = "red";
    }
    if (!companyNumberIsValid) {
        companyNumberInput.style.borderColor = "red";
    }

  });
}
