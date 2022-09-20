function balls (input) {
    let balls = Number (input[0]);
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let total = 0;
    let command = 0;
    let odd = 0;

    for (let i = 1; i <= balls; i++) {
        command = input [i]
        if (command == `red`) {
            red += 1
            total += 5
        } else if ( command == `orange`) {
            orange +=1
            total += 10
        } else if ( command == `yellow`) {
            yellow += 1
            total += 15
        } else if ( command == `white`) {
            white += 1
            total += 20
        } else if ( command == `black`) {
            black +=1
            total = total / 2

        } else {
            odd += 1
            continue;
        }
        
    }
    console.log (`Total points: ${Math.floor(total)}`)
    console.log (`Red balls: ${red}`)
    console.log (`Orange balls: ${orange}`)
    console.log (`Yellow balls: ${yellow}`)
    console.log (`White balls: ${white}`)
    console.log (`Other colors picked: ${odd}`)
    console.log (`Divides from black balls: ${black}`)
    
    
}
balls ([`10`, `white`, `white`, `dd`, `red`, `orange`, `red`, `black`,`black`,`black`,`black`])