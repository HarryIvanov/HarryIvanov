function pc (input) {
    let index = 0;
    let gamesSold = Number (input[index]);
    index++;
    let hs = 0;
    let fn = 0;
    let ow = 0;
    let others = 0;

    for (let i = 0; i < gamesSold; i++) {
        let game = input[index];
        switch (game) {
            case `Hearthstone` : hs ++ ; break ;
            case `Fornite` : fn++ ; break ;
            case `Overwatch` : ow++ ; break ;
            default : others++ ; break ;
        }
        index++
    }
    let hsPerc = 100 / (gamesSold / hs); 
    let fnPerc = 100 / (gamesSold / fn); 
    let owPerc = 100 / (gamesSold / ow); 
    let othersPerc = 100 / (gamesSold / others); 
    
    
    
    console.log(`Hearthstone - ${hsPerc.toFixed(2)}%`);
    console.log(`Fornite - ${fnPerc.toFixed(2)}%`);
    console.log(`Overwatch - ${owPerc.toFixed(2)}%`);
    console.log(`Others - ${othersPerc.toFixed(2)}%`);
}
pc (["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])
