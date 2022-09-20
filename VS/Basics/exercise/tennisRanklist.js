function tennis (input) {
    
    let average =0;
    let wins =0;
    let total =0;
    let index = 1;
    let cond = input[index];
    index++
    let tournaments = Number (input [0]);
    let startingPoints = Number (input[1]);

    for (let i = 0; i <= tournaments; i++) {
        cond = input[index] 
        index++
        if (cond == `W`) {
            wins += 1;
            total += 2000;
        } else if (cond == `F`) {
            total += 1200;
        } else if (cond == `SF`) {
            total += 720
        } 
    } 
    console.log (`Final points: ${Math.abs(total + startingPoints)}`)
    console.log (`Average points: ${Math.floor(total/tournaments)}`)
    console.log (`${(wins/tournaments*100).toFixed(2)}%`)

} 
tennis ([`7`,
`1200`,
`SF`,
`F`,
`W`,
`F`,
`W`,
`SF`,
`W`])