function tournament (input) {
let index = 0;
let team = input[index];
index++
let matches = Number (input[index]);
index++
let wins = 0;
let losses = 0;
let allGames = 0;


    while (team !== `End of tournaments`) {
        
        for (let i = 0; i < matches; i++) {
            let points1 = Number (input[index]);
            index++;
            let points2 = Number (input[index]);
            index++ ;
            if (points1 > points2) {
                wins++;
                let diff = Math.abs(points1 - points2);
                console.log (`Game ${i+1} of tournament ${team}: win with ${diff} points.`);
            } else {
                losses++;
                let diff = Math.abs(points1 - points2);
                console.log (`Game ${i+1} of tournament ${team}: lost with ${diff} points.`);
            }
            
        }
        
        team = input[index];
        index++
        matches = Number (input[index]);
        index++
    }
    allGames = wins + losses
    let percentWins = (wins / allGames) * 100;
    let percentLosses = (losses / allGames) * 100;
    console.log (`${percentWins.toFixed(2)}% matches win`) 
    console.log (`${percentLosses.toFixed(2)}% matches lost`) 






}
tournament (["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"])

