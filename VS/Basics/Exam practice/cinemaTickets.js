function tickets (input) {
let index = 0;
let command = input[index];
index++;
let standard = 0;
let student = 0;
let kid = 0;
let tickets = 0;


    while (command !== `Finish`) {
        let freeSeats = Number (input[index]);
        let currentMovieTickets = 0;
        
        index++;
        for (let i = 0; i < freeSeats; i++) {
            let counter = input[index];
            
            if (counter === `End`) {
                index++;
                break;
            } else if (counter === `standard`) {
                standard++;
                tickets++;
                currentMovieTickets++;
            } else if (counter === `student`) {
                student++;
                tickets++;
                currentMovieTickets++;
            } else if (counter === `kid`) {
                kid++;
                tickets++;
                currentMovieTickets++;
            }
            index++;
    }
    let currMovie = currentMovieTickets / freeSeats * 100
    console.log(`${command} - ${currMovie.toFixed(2)}% full.`);
    command = input[index];
    index++;
    }
let studPerc = student / tickets * 100;
let standPerc = standard / tickets * 100;
let kidPerc = kid / tickets * 100;
console.log(`Total tickets: ${tickets}`);
console.log(`${studPerc.toFixed(2)}% student tickets.`);
console.log(`${standPerc.toFixed(2)}% standard tickets.`);
console.log(`${kidPerc.toFixed(2)}% kids tickets.`);
}
tickets (["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
