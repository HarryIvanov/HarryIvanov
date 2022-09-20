function player (input) {
    let index = 0;
    let player = input[index];
    index++
    let goals = Number (input[index]);
    index++
    let ht = true;
    let counter = 0;
    let bestPlayer = 0;
    let bestScore =0;
    
    
    
       
        while (player !== `END`) {
            
            if (goals > counter) {
                bestPlayer = player
                bestScore = goals

            }
            if (goals >=  10) {
                break;
        } 
            counter = goals;
            player = input[index];
            index++
            goals = Number (input[index]);
            index++
            
            
            
         
        
    } if (bestScore >= 3) {
        console.log (`${bestPlayer} is the best player!`);
        console.log (`He has scored ${bestScore} goals and made a hat-trick !!!`)
    } else {
        console.log (`${bestPlayer} is the best player!`);
        console.log (`He has scored ${bestScore} goals.`)
    }
    
}
player (["Silva",
"1",
"Harry Kane",
"2", "Jorko", "2", "END"])






