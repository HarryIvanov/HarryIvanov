function inventory(array) {
  let inv = array.shift().split(", ");
  let combined = [];
  let length = Number(array.length);

  for (let i = 0; i < length; i++) {
    let check = array[i];
    if (check == "Craft!") {
      break;
    }
    if (array[i].includes("Combine")) {
      let [command, newItem] = array[i].split(":");
      combined.push(command);
      let [com, buffer, item] = combined
        .shift()
        .split(" ")
        .filter((x) => x !== "-");
      if (inv.includes(item)) {
        let n = Number(inv.indexOf(item));
        inv.splice(n + 1, 0, newItem);
      }
    } else {
      let [command, item] = array[i].split(" ").filter((x) => x !== "-");
      if (command == "Collect") {
        if (inv.includes(item)) {
          continue;
        } else {
          inv.push(item);
        }
      } else if (command == "Drop") {
        if (inv.includes(item)) {
          let n = Number(inv.indexOf(item));
          inv.splice(n, 1);
        }
      } else if (command == "Renew") {
        if (inv.includes(item)) {
          let n = Number(inv.indexOf(item));
          let itemToRenew = inv.splice(n, 1).toString();
          inv.push(itemToRenew);
        }
      }
    }
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
