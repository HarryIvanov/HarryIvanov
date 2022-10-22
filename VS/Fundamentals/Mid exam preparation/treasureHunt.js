function treasureHunt(array) {
  let inventory = array[0].split("|");

  for (let i = 1; i <= array.length; i++) {
    if (array[i] === 'Yohoho!') {
        break;
    }
    let newArr = array[i].split(" ");
    for (let x = 0; x < newArr.length; x++) {
      let command = newArr[x].toString();
      if (command === "Loot") {
        for (let y = 1; y < newArr.length; y++) {
          let item = newArr[y];
          if (inventory.includes(item)) {
            continue;
          } else {
            inventory.unshift(item);
          }
        }
      } else if (command === "Drop") {
        for (let y = 1; y < newArr.length; y++) {
          let drop = Number(newArr[y]);
          if (drop < 0 || drop >= inventory.length) {
            break;
          }
          let item = inventory.splice(drop, 1).toString();
          inventory.push(item);
        }
      } else if (command === "Steal") {
        for (let y = 1; y < newArr.length; y++) {
          let drop = Number(newArr[y]);
          let stealed = inventory.slice(-drop);
          inventory.splice(-drop)
          
          console.log(stealed.join(", "));
        }
      } 
    }
  }
    if (inventory.length <=0) {
        console.log("Failed treasure hunt.");
    }   else {
        let length = inventory.length
        let sum = 0;
        for (let i = 0; i < inventory.length; i++) {
            sum += inventory[i].length
        }
        let final = sum / length
        console.log(`Average treasure gain: ${final.toFixed(2)} pirate credits.`);
    }
}
treasureHunt (["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])



