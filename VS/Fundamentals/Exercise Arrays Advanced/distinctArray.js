function distinctArray(input) {
  let array = input.map(Number);

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    for (let x = 0; x < array.length; x++) {
      let num2 = array[x];
      if (num === num2)
        if (array.indexOf(num) === x) {
          continue;
        } else {
          array.splice(x, 1);
        }
    }
  }
  console.log(array.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
