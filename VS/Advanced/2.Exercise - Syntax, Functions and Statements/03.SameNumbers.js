function sameNumbers (num) {
    isOk = true;
    let result = 0;
  let num1 = num.toString();
  for (let i = 1; i < num1.length; i++) {
    if (Number (num1[i]) !== Number (num1[i-1])) {
        isOk = false;
        break;
    }
  }
  for (let i = 0; i < num1.length; i++) {
    result += Number (num1[i])
  }
  console.log(isOk);
  console.log(result);

}
sameNumbers (1234)