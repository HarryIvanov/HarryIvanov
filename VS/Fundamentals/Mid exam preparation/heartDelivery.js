function heartDelivery(array) {
  let houses = array
    .shift()
    .split("@")
    .map((el) => Number(el));
  done = false;
  let check = [];
  let com = 0;
  for (let i = 0; i < array.length; i++) {
    let [command, index] = array[i].split(" ");
    if (command == "Love!") {
      done = true;
      break;
    }
    index = Number(index) + com;
    if (index >= houses.length) {
      index = 0;
      com = 1;
    }

    houses[index] = Number(houses[index] - 2);
    if (Number(houses[index]) <= 0) {
      if (check.includes(index)) {
        console.log(`Place ${index} already had Valentine's day.`);
      } else {
        console.log(`Place ${[index]} has Valentine's day.`);
        check.push(Number(index));
      }
    }

    com = Number(index);
  }
  if (done) {
    console.log(`Cupid's last position was ${com}.`);
    let success = 0;
    for (let el of houses) {
      if (Number(el) > 0) {
        continue;
      } else {
        success++;
      }
    }
    if (success == Number(houses.length)) {
      console.log("Mission was successful.");
    } else {
      let z = Number(houses.length) - success;
      console.log(`Cupid has failed ${z} places.`);
    }
  }
}
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
