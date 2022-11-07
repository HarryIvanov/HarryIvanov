function cardGame(input) {
  let result = new Map();

  for (let readLine of input) {
    let line = readLine.split(": ");
    let name = line.shift();
    let rLine = line[0];
    let deckLine = rLine.split(", ");
    if (!result.has(name)) {
      result.set(name, new Set());
    }
    for (const card of deckLine) {
      result.get(name).add(card);
    }
  }
  for (const [key, value] of result) {
    let sum = 0;
    for (const card of value) {
      let cardInfo = card.split("");
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join("");
      if (cardType == "S") {
        cardType = 4;
      } else if (cardType == "H") {
        cardType = 3;
      } else if (cardType == "D") {
        cardType = 2;
      } else if (cardType == "C") {
        cardType = 1;
      }
      if (cardPower == "J") {
        cardPower = 11;
      } else if (cardPower == "Q") {
        cardPower = 12;
      } else if (cardPower == "K") {
        cardPower = 13;
      } else if (cardPower == "A") {
        cardPower = 14;
      } else {
        cardPower = Number(cardPower);
      }
      sum += cardPower * cardType;
    }
    result.set(key, sum);
    console.log(`${key}: ${sum}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
