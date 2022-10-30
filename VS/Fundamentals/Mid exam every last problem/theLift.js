function theLift(array) {
  let waiting = Number(array.shift());
  let wagons = [];

  for (let el of array.toString()) {
    if (el == " ") {
      continue;
    } else {
      num = Number(el);
      wagons.push(num);
    }
  }
  let noMoreWaiting = false;
  for (let i = 0; i < wagons.length; i++) {
    if (wagons[i] < 4) {
      let peopleToJoin = 4 - wagons[i];
      waiting -= peopleToJoin;
      if (waiting < 0) {
        waiting += peopleToJoin;
        peopleToJoin = waiting;
        wagons[i] += peopleToJoin;
        noMoreWaiting = true;
        break;
      } else {
        wagons[i] += peopleToJoin;
        if (waiting == 0) {
          noMoreWaiting = true;
          break;
        }
      }
    }
  }

  if (noMoreWaiting) {
    let count = 0;
    for (let el of wagons) {
      if (el !== 4) {
        count++;
      }
    }
    if (count !== 0) {
      console.log("The lift has empty spots!");
      console.log(wagons.join(" "));
    } else {
      console.log(wagons.join(" "));
    }
  } else if (!noMoreWaiting) {
    console.log(`There isn't enough space! ${waiting} people in a queue!`);
    console.log(wagons.join(" "));
  }
}
theLift(["15", "2 2 2 2 0 1"]);
