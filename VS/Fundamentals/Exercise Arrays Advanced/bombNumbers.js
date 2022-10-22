function bombNumbers (input, bomb) {
    let bombNumber = Number (bomb[0]);
    let radius = Number (bomb[1]);

    let index = input.indexOf(bombNumber)
    while (index !== -1) {
        let start = Math.max(0, index - radius) 
        let explosion = radius * 2 + 1
        input.splice(start, explosion)
        index = input.indexOf(bombNumber)
    }
    let sum = 0;
    for (el of input) {
        sum += el
    }
    console.log(sum);

    
    
    


}    
bombNumbers ([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])