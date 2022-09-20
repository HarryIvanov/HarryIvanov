function fruit (input) {
    let item = input [0];
    let ww = 0;
    switch (item) {
        case `banana`: 
        case `apple`: 
        case `kiwi`:
        case `cherry`: 
        case `grapes`: 
        case `lemon`: ww = `fruit` ; break ;
        case `tomato`: 
        case `cucumber`: 
        case `pepper`: 
        case `carrot`: ww = `vegetable` ; break ;
        default : ww =  `unknown` ; break ;
        
    } 
    console.log (`${ww}`) 
}
fruit (["water"])