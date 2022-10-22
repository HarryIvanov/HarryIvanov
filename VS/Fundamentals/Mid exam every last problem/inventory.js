function inventory(array) {
  let inv = array.shift().split(", ");

  let index = 0;
  let readLine = array[index];
  index++;

  while (readLine !== "Craft!") {
    let [command, item] = readLine.split(" - ");
    if (command == "Collect") {
      if (!inv.includes(item)) {
        inv.push(item);
      }
    } else if (command == "Drop") {
      if (inv.includes(item)) {
        let indexOfItem = inv.indexOf(item);
        inv.splice(indexOfItem, 1);
      }
    } else if (command == "Combine Items") {
      let [item1, item2] = item.split(":");
      if (inv.includes(item1)) {
        let indexOfItem = inv.indexOf(item1);
        inv.splice(indexOfItem + 1, 0, item2);
      }
    } else if (command == "Renew") {
      if (inv.includes(item)) {
        let indexOfItem = inv.indexOf(item);
        let renewedItem = inv.splice(indexOfItem, 1).toString();
        inv.push(renewedItem);
      }
    }

    readLine = array[index];
    index++;
  }
  console.log(inv.join(", "));
}
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
