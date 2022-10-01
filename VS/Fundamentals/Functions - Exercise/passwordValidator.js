function passwordValidator(password) {
  lengthIsValid = false;
  lettersAndDigits = true;
  twoDigits = false;

  let length = password.length;
  let digitsCounter = 0;

  for (let i = 0; i < length; i++) {
    let check = password[i];
    let code = Number(check.charCodeAt(0));
    if (length >= 6 && length <= 10) {
      lengthIsValid = true;
    } else {
      lengthIsValid = false;
    }
    if (code >= 48 && code <= 57) {
      digitsCounter++;
      if (digitsCounter >= 2) {
        twoDigits = true;
      }
    }
    if (
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122) ||
      (code >= 48 && code <= 57)
    ) {
    } else {
      lettersAndDigits = false;
    }
  }
  if (!lengthIsValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!lettersAndDigits) {
    console.log("Password must consist only of letters and digits");
  }
  if (!twoDigits) {
    console.log("Password must have at least 2 digits");
  }
  if (lettersAndDigits && twoDigits && length) {
    console.log("Password is valid");
  }
}
passwordValidator("_pas4");
