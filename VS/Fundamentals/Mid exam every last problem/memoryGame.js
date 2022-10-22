function memoryGame(input) {
  let board = input.shift().split(" ");
  let index = 0;
  let command = input[index];
  index++;
  let moves = 0;
  while (command !== "end") {
    if (command.length > 1) {
      if (board.length <= 0) {
        break;
      }
      let [num1, num2] = command.split(" ").map(Number);
      if (board[num1] === board[num2] && num1 !== num2) {
        console.log(
          `Congrats! You have found matching elements - ${board[num1]}!`
        );
        let n1 = Math.max(num1, num2);
        let n2 = Math.min(num1, num2);
        board.splice(n2, 1);
        board.splice(n1 - 1, 1);
        moves++;
        command = input[index];
        index++;
        continue;
      }
      if (
        num1 == num2 ||
        num1 < 0 ||
        num1 > board.length - 1 ||
        num2 < 0 ||
        num2 > board.length - 1
      ) {
        console.log("Invalid input! Adding additional elements to the board");
        moves++;
        let halfLength = board.length / 2;
        let additionalMoves = `-${moves}a`;
        board.splice(halfLength, 0, additionalMoves, additionalMoves);
        command = input[index];
        index++;
        continue;
      }
      if (board[num1] !== board[num2]) {
        console.log("Try again!");
        moves++;
        command = input[index];
        index++;
        continue;
      }
    }
  }
  if (board.length > 0) {
    console.log("Sorry you lose :(");
    console.log(board.join(" "));
  } else {
    console.log(`You have won in ${moves} turns!`);
  }
}
memoryGame(["a 2 4 a 2 4", "1 6", "1 2", "1 3", "1 3", "end"]);
