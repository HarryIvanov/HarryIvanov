function movingTarget(input) {
  let targets = input[0].split(" ").map((el) => Number(el));
  input.shift();

  for (let i = 0; i < input.length; i++) {
    let [command, token1, token2] = input[i].split(" ");
    token1 = Number(token1);
    token2 = Number(token2);
    if (command == "Shoot") {
      if (token1 > targets.length - 1 || token1 < 0) {
        continue;
      } else {
        targets[token1] = Number(targets[token1]) - token2;
        if (Number(targets[token1]) <= 0) {
          targets.splice(token1, 1);
        }
      }
    } else if (command == "Add") {
      if (token1 > targets.length - 1 || token1 < 0) {
        console.log("Invalid placement!");
        continue;
      } else {
        targets.splice(token1, 0, token2);
      }
    } else if (command == "Strike") {
      let startIndex = Math.max(0, token1 - token2);
      let endIndex = token2 * 2 + 1;
      if (token1 < 0 || token1 > targets.length - 1) {
        console.log("Strike missed!");
        continue;
      } else if (startIndex < 0 || endIndex > targets.length - 1) {
        console.log("Strike missed!");
        continue;
      } else {
        targets.splice(startIndex, endIndex);
      }
    } else if (command == "End") {
      console.log(targets.join("|"));
    }
  }
}
movingTarget([
  "52 74 23 44 96 110",
  "Strike 1 1",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
