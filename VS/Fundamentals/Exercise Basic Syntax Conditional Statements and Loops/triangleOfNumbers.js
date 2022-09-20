function triangleOfNumbers (num) {
    
    for (let row = 1; row <= num; row++) {
        let counter = "";
        for (let x = 1; x <= row; x++ ) {
            counter += `${row} ` 
            
        }
        console.log(`${counter}`);
    }
}
triangleOfNumbers (3)