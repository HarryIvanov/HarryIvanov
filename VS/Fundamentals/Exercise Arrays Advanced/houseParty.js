function houseParty(input) {
  let listGoing = [];
  let listNotGoing = [];

  for (let i = 0; i < input.length; i++) {
    let arr = input[i];
    if (arr.includes("is going")) {
      let name = arr.split(" ");
      name = name[0];
      if (listGoing.includes(name)) {
        console.log(`${name} is already in the list!`);
        continue;
      }

      listGoing.push(name);

      if (listNotGoing.includes(name)) {
        let ind = listNotGoing.indexOf(name);
        listNotGoing.splice(ind, 1);
      }
    } else if (arr.includes("not going")) {
      let name = arr.split(" ");
      name = name[0];
      if (listNotGoing.includes(name)) {
        continue;
      }

      listNotGoing.push(name);

      if (listGoing.includes(name)) {
        let ind = listGoing.indexOf(name);
        listGoing.splice(ind, 1);
        ind = listNotGoing.indexOf(name);
        listNotGoing.splice(ind, 1);
      }
    }
  }
  if (listNotGoing.length > 0) {
    for (let i = 0; i < listNotGoing.length; i++) {
      let ng = listNotGoing[i];
      console.log(`${ng} is not in the list!`);
    }
  }
  console.log(listGoing.join("\n"));
}
houseParty([
  "Tom is not going!",
  "Tom is not going!",
  "Tom is not going!",
  "Garry is not going!",
  "Jerry is going!",
]);
