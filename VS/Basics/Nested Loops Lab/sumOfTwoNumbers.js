function sumOfNumbers(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let magicNumer = Number(input[2]);
  let combinations = 0;
  let n2 = 0;
  isFound = true;

  for (let n1 = startNumber; n1 <= endNumber; n1++) {
    for (let n2 = startNumber; n2 <= endNumber; n2++) {
      combinations++;
      if (n1 + n2 == magicNumer) {
        console.log(
          `Combination N:${combinations} (${n1} + ${n2} = ${magicNumer})`
        );
        isFound = false;
        break;
      }
    }
    if (!isFound) {
      break;
    }
  }
  if (isFound) {
    console.log(`${combinations} combinations - neither equals ${magicNumer}`);
  }
}
sumOfNumbers(["88", "888", "2000"]);
