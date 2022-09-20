function decoration(input) {
  //basket - 1.50
  //wreath - 3.80
  //chocolate bunny - 7
  let index = 0;
  let clients = Number(input[index]);
  index++;
  let product = input[index];
  let price = 0;
  let productsPerClient = 0;
  let totalPerClient = 0;
  let total = 0;

  for (let i = 1; i <= clients; i++) {
    while (product !== `Finish`) {
      if (product == `basket`) {
        price = 1.5;
        productsPerClient++;
        totalPerClient = totalPerClient + price;
      } else if (product == `wreath`) {
        price = 3.8;
        productsPerClient++;
        totalPerClient = totalPerClient + price;
      } else if (product == `chocolate bunny`) {
        price = 7;
        productsPerClient++;
        totalPerClient = totalPerClient + price;
      }
      index++;
      product = input[index];
    }
    if (productsPerClient % 2 == 0) {
      totalPerClient = totalPerClient * 0.8;
    }
    console.log(
      `You purchased ${productsPerClient} items for ${totalPerClient.toFixed(2)} leva.`)
      total = total + totalPerClient
      totalPerClient = 0;
      productsPerClient = 0;
      index++;
      product = input[index];
      

  }
console.log (`Average bill per client is: ${(total / clients).toFixed(2)} leva.`)
}
decoration([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
