function tickets(input) {
  let index = 0;
  let command = input[index];
  let student = 0;
  let kid = 0;
  let standart = 0;
  let tickets = 0;
  let perMovie = 0;
  let finished = true;

  while (command !== `Finish`) {
    let ticketsPerMovie = 0;
    let movie = input[index];
    index++;
    let total = Number(input[index]);
    index++;
    let counter = input[index];
    while (counter !== `End`) {
      if (counter == `Finish`) {
        finished = false;
        break;
      }
      switch (counter) {
        case `student`:
          student++, tickets++, ticketsPerMovie++;
          break;
        case `kid`:
          kid++, tickets++, ticketsPerMovie++;
          break;
        case `standard`:
          standart++, tickets++, ticketsPerMovie++;
          break;
        default:
          break;
      }
      if (ticketsPerMovie == total) {
        break;
      }
      index++;
      counter = input[index];
    }
    perMovie = (ticketsPerMovie / total) * 100;
    console.log(`${movie} - ${perMovie.toFixed(2)}% full.`);
    if (!finished) {
      break;
    }

    index++;
    command = input[index];
  }
  let percentStudent = 0;
  let percentKids = 0;
  let percentStandard = 0;

  percentStudent = (student / tickets) * 100;
  percentKids = (kid / tickets) * 100;
  percentStandard = (standart / tickets) * 100;

  console.log(`Total tickets: ${tickets}`);
  console.log(`${percentStudent.toFixed(2)}% student tickets.`);
  console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
  console.log(`${percentKids.toFixed(2)}% kids tickets.`);
}
tickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

