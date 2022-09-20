function tournament(input) {
  let index = 0;
  let days = Number(input[0]);
  index++;
  let dayMoney = 0;
  let wins = 0;
  let losses = 0;
  let daysWon = 0;
  let totalMoney = 0;
  let winsForTheDay = 0;
  let lossesForTheDay = 0;


  for (let day = 1; day <= days; day++) {
    for (let type = 1; type !== `Finish`; index++) {
      type = input[index];

      if (type === `win`) {
        winsForTheDay++;
        dayMoney = dayMoney + 20;
      } else if (type === `lose`) {
        lossesForTheDay++;
      }
    }
    if (winsForTheDay > lossesForTheDay) {
      dayMoney = dayMoney + dayMoney * 0.1;
    }
    wins = wins + winsForTheDay
    losses = lossesForTheDay + losses
    daysWon = dayMoney + daysWon;
    dayMoney = 0;
    lossesForTheDay = 0;
    winsForTheDay = 0;
  }
  if (wins > losses) {
    totalMoney = daysWon * 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${daysWon.toFixed(2)}`
    );
  }
}
tournament (["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])



