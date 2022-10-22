function storeProvision(storeStock, storeOrder) {
  for (let i = 0; i < storeOrder.length; i++) {
    let item = storeOrder[i];
    if (i % 2 == 1) {
      continue;
    }

    if (storeStock.includes(item)) {
      let itemStock = Number(storeOrder[i + 1]);
      let index = storeStock.indexOf(item);
      let stockz = Number(storeStock[index + 1]);
      storeStock[index + 1] = stockz += itemStock;
    } else {
      storeStock.push(item);
      storeStock.push(storeOrder[i + 1]);
    }
  }

  for (let i = 0; i < storeStock.length; i++) {
    let itemz = storeStock[i];
    let stock = storeStock[i + 1];
    i++;
    let myObj = {
      itemz,
      stock,
    };

    console.log(`${myObj["itemz"]} -> ${myObj["stock"]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
