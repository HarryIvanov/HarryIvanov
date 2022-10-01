function simpleCalculator(num1, num2, operator) {
  let res = 0;
  let multiply = (num1, num2) => num1 * num2;
  let divide = (num1, num2) => num1 / num2;
  let add = (num1, num2) => num1 + num2;
  let subtract = (num1, num2) => num1 - num2;

  switch (operator) {
    case "multiply":
      res = multiply(num1, num2);
      break;
    case "divide":
      res = divide(num1, num2);
      break;
    case "add":
      res = add(num1, num2);
      break;
    case "subtract":
      res = subtract(num1, num2);
      break;
  }

  console.log(res);
}
simpleCalculator(5, 5, "multiply");
