function greatestCommonDivisorGCD(n1, n2) {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      result = i;
    }
  }
  console.log(result);
}
greatestCommonDivisorGCD(2154, 458);
