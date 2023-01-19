function fruit(fruit, kgs, sellPrice) {
  let grams = kgs / 1000;
  let price = (sellPrice * kgs) / 1000;

  console.log(
    `I need $${price.toFixed(2)} to buy ${grams.toFixed(2)} kilograms ${fruit}.`
  );
}
fruit("apple", 1563, 2.35);
