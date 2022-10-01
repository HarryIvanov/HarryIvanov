function ladyBugs(arr) {
  let field = arr[0];
  let positions = arr[1];

  let array = [];

  for (let i = 0; i < field; i++) {
    array.push(0);
  }

  for (let i = 0; i < field; i++) {
    let index = positions[i];
    if (index >= 0 && index < field) {
      array[index] = 1;
    }
  }

  for (let i = 2; i < arr.length; i++) {
    let [index, command, length] = arr[i].split(" ");
    index = +index;
    length = +length;

    if (array[index] !== 1 || index < 0 || index >= array.length) {
      continue;
    }
    if (length < 0) {
      length = Math.abs(length);
      if (command === "right") {
        command = "left";
      } else if (command === "left") {
        command = "right";
      }
    }

    array[index] = 0;
    if (command === "right") {
      let newPosition = index + length;

      if (array[newPosition] === 1) {
        newPosition = newPosition + length;
      }
      if (newPosition <= array.length) {
        array[newPosition] = 1;
      }
    } else {
      let newPosition = index - length;

      if (array[newPosition] === 1) {
        newPosition = newPosition - length;
      }
      if (newPosition >= 0) {
        array[newPosition] = 1;
      }
    }
  }

  console.log(array.join(" "));
}
ladyBugs([5, "3", "3 left 2", "1 left -2"]);
