function party(input) {
  let guests = Number(input[0]);
  let couvert = Number(input[1]);
  let budget = Number(input[2]);
  let cake = budget * 0.1;

  if (guests >= 10 && guests <= 15) {
    couvert = couvert * 0.85;
  } else if (guests > 15 && guests <= 20) {
    couvert = couvert * 0.8;
  } else if (guests > 20) {
    couvert = couvert * 0.75;
  }
  let total = couvert * guests + cake;
  if (total <= budget) {
    let diff = budget - total;
    console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
  } else {
    let diff = total - budget;
    console.log(`No party! ${diff.toFixed(2)} leva needed.`);
  }
}
party(["8", "25", "340"]);
