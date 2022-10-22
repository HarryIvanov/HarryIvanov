function memoryGame(array) {
  let newArr = array.shift();
  let moves = 0;
  let finalArray = [];
  let end = false;

  for (let x = 0; x < newArr.length; x++) {
    let n = newArr[x];
    if (n === " ") {
      continue;
    } else {
      finalArray.push(n);
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "end") {
      end = true;
      break;
    }
    let [index1, space, index2, buffer1, buffer2, buffer3] = array[i];
    index1 = Number(index1);
    index2 = Number(index2);
    buffer1 = buffer1;
    buffer2 = buffer2;
    buffer3 = buffer3;
    if (
      index1 > Number(finalArray.length - 1) ||
      index2 > Number(finalArray.length - 1)
    ) {
      moves++;
      let add = "-" + moves + "a";
      console.log("Invalid input! Adding additional elements to the board");
      let num = finalArray.length / 2;
      finalArray.splice(num, 0, add);
      finalArray.splice(num, 0, add);
      continue;
    }
    if (space !== " " || index1 === index2) {
      moves++;
      let add = "-" + moves + "a";
      console.log("Invalid input! Adding additional elements to the board");
      let num = finalArray.length / 2;
      finalArray.splice(num, 0, add);
      finalArray.splice(num, 0, add);
      continue;
    }
    if (finalArray[index1] !== finalArray[index2] && space == " ") {
      console.log("Try again!");
      moves++;
    }
    if (finalArray[index1] === finalArray[index2]) {
      let el = finalArray[index1];
      console.log(`Congrats! You have found matching elements - ${el}!`);
      moves++;
      let num1 = Number(finalArray.indexOf(el));
      finalArray.splice(num1, 1);
      let num2 = Number(finalArray.indexOf(el));
      finalArray.splice(num2, 1);
      if (finalArray.length <= 0) {
        console.log(`You have won in ${moves} turns!`);
        break;
      }
    }
  }
  if (end) {
    console.log("Sorry you lose :(");
    console.log(finalArray.join(" "));
  }
}
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
