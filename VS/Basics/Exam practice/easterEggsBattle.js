function battles(input) {
  let index = 0;
  let n1 = Number(input[index]);
  index++;
  let n2 = Number(input[index]);
  index++;
  let counter = input[index];
  let noWinner = true;

  while (counter !== `End`) {
    if (counter === `one`) {
      n2 = n2 - 1;
      if (n2 <= 0) {
        console.log(
          `Player two is out of eggs. Player one has ${n1} eggs left.`
        );
        break;
      }
    } else if (counter === `two`) {
      n1 = n1 - 1;
      if (n1 <= 0) {
        console.log(
          `Player one is out of eggs. Player two has ${n2} eggs left.`
        );
        break;
      }
    }
    index++;
    counter = input[index];
    if (counter === `End`) {
      noWinner = false;
      break;
    }
  }
  if (!noWinner) {
    console.log(`Player one has ${n1} eggs left.`);
    console.log(`Player two has ${n2} eggs left.`);
  }
}
battles([`6`, `3`, `one`, `two`, `two`, `one`, `one`, `End`]);
