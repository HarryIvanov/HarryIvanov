function wars (input) {
let name = input[0];
let name2 = input[1];

let nameOneTotal = 0;
let nameTwoTotal = 0;
let winner = ""

let game = true;

let index = 1;
index++
let counter = input[index];

while (counter !== `End of game`) {
    let card1 = Number (input[index]);
    index++
    let card2 = Number (input[index]);
    if (!game) {
        if (card1 > card2) {
            
            winner = name
            console.log (`Number wars!`);
            console.log (`${winner} is winner with ${nameOneTotal} points`)
            break;
        } else if (card2 > card1) {
            
            winner = name2
            console.log (`Number wars!`);
            console.log (`${winner} is winner with ${nameTwoTotal} points`)

            break;
        }
    }


    if (card1 > card2) {
        nameOneTotal = nameOneTotal + (card1 - card2);

    } else if (card2 > card1) {
        nameTwoTotal = nameTwoTotal + (card2 - card1);

    } else if (card1 = card2) {
        game = false;
        index++
        continue;
    } 
    index++
    counter = input[index];
}
if (game) {
    console.log (`${name} has ${nameOneTotal} points`)
    console.log (`${name2} has ${nameTwoTotal} points`)
}

}
wars (["Elena",
"Simeon",
"6",
"3",
"2",
"5",
"8",
"9",
"End of game"])



