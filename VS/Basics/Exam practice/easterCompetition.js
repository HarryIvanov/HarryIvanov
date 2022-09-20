function competition(input) {
  let index = 0;
  let competitors = Number(input[index]);
  index++;
  let name = input[index];

  let baker = 0;
  let points = 0;
  let allPoints = 0;
  let totalPoints = 0;
  let winner = 0;
  let winpoints = 0;

  for (let i = 1; i <= competitors; i++) {
    name = input[index];
    baker = input[index];
    index++;
    while (baker !== `Stop`) {
      points = Number(input[index]);
      allPoints = points + allPoints;
      index++;
      baker = input[index];
    }

    console.log(`${name} has ${allPoints} points.`);
    if (totalPoints < allPoints) {
      console.log(`${name} is the new number 1!`);
      winner = name;
      winpoints = allPoints;
    }
    totalPoints = allPoints;
    allPoints = 0;
    index++;
  }
  console.log(`${winner} won competition with ${winpoints} points!`);
}

competition([
  "3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4",
  "2",
  "Stop",
]);
