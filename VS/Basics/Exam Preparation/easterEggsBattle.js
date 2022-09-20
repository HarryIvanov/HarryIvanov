function battle (input) {
let index = 0;
let playerOne = Number (input[index]);
index++;
let playerTwo = Number (input[index]);
index++;

let command = input[index];
index++;

let p1Eggs = Number(playerOne);
let p2Eggs = Number(playerTwo);
let endGame = false;

    while (command!== `End`) {
        if (p1Eggs <= 0) {
            console.log(`Player one is out of eggs. Player two has ${p2Eggs} eggs left.`);
            endGame = true;
            break;
        } else if (p2Eggs <= 0) {
            console.log(`Player two is out of eggs. Player one has ${p1Eggs} eggs left.`);
            endGame = true;
            break;
        } 
        if (command === `one`) {
            p2Eggs--;
        } else if (command === `two`) {
            p1Eggs--;
        }
        command = input[index];
        index++
    }
if (!endGame) {
    console.log(`Player one has ${p1Eggs} eggs left.`);
    console.log(`Player two has ${p2Eggs} eggs left.`);
}


}
battle ([`2`, `6`, `one`, `two`, `two`])