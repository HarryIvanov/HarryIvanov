function thePyramidOfKingDjoser (base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let counter = 0;
    let side = base;

    for (let i = base; i >= 1; i-=2) {
        counter++
         if (i <= 2) {
             totalGold = (side * side) * increment;
             break;
        } 
        
        if (counter % 5 == 0) {
            totalLapis += ((side * 4) - 4) * increment;
            totalStone += (side - 2) * (side - 2) * increment;
        } else {
        totalStone += (side - 2) * (side - 2) * increment;
        totalMarble += ((side * 4) - 4) * increment;
        }
        side -= 2
    } 
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(counter*increment)}`);
}
thePyramidOfKingDjoser (12, 1)