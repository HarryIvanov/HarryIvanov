function heartDelivery(input) {
  let neighborhood = input
    .shift()
    .split("@")
    .map((x) => Number(x));
  let index = 0;
  let readLine = input[index];
  index++;
  let places = 0;

  while (readLine !== "Love!") {
    let [command, houseIndex] = readLine.split(" ");
    houseIndex = Number(houseIndex);
    houseIndex += Number(places);
    if (houseIndex > neighborhood.length-1) {
      houseIndex = 0;
    }
    if (neighborhood[houseIndex] == 0) {
      console.log(`Place ${houseIndex} already had Valentine's day.`);
      places = Number(houseIndex);
      readLine = input[index];
      index++;
      continue;
    } else {
      neighborhood[houseIndex] -= 2;
      if (neighborhood[houseIndex] < 0) {
        neighborhood[houseIndex] = 0;
      }
      places = Number(houseIndex);
      if (neighborhood[houseIndex] == 0) {
        console.log(`Place ${houseIndex} has Valentine's day.`);
        places = Number(houseIndex);
      }
    }

    readLine = input[index];
    index++;
  }
  console.log(`Cupid's last position was ${places}.`);
  let sum = 0;
  for (let el of neighborhood) {
    if (el !== 0) {
      sum += 1;
    }
  }
  if (sum > 0) {
    console.log(`Cupid has failed ${sum} places.`);
  } else {
    console.log("Mission was successful.");
  }
}
heartDelivery([
"2@2@2",
"Jump 1",
"Jump 1",
"Jump 1",
"Jump 1",
"Love!",
]);
