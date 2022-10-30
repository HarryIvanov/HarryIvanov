function deckOfCards (input) {
    let list = input.shift().split(", ")
    let integer = Number (input.shift());

    for (let i = 0; i < integer; i++) {
        let [command, index, cardName] = input[i].split(", ");
        
        if (command == "Add") {
            if (list.includes(index)) {
                console.log("Card is already in the deck");
            } else {
                list.push(index);
                console.log("Card successfully added");
            }
        } else if (command == "Remove") {
            if (list.includes(index)) {
                let cardDelete = Number (list.indexOf(index));
                list.splice(cardDelete, 1)
                console.log("Card successfully removed");
            } else {
                console.log("Card not found");
            }
        } else if (command == "Remove At") {
            index = Number (index);
            if (list[index]) {
                list.splice(index, 1)
                console.log("Card successfully removed");
            } else {
                console.log("Index out of range");
            }
        } else if (command == "Insert") {
            index = Number (index);
            if (!list[index]) {
                console.log("Index out of range");
            } else if (list.includes(cardName)) {
                console.log("Card is already added");
            } else {
                list.splice(index, 0, cardName);
                console.log("Card successfully added");
            }
        }
    }
    console.log(list.join(", "));
}
deckOfCards (["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"])


