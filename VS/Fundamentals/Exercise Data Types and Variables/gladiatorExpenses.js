function gladiatorExpenses (lost, helmets, swords, shields, armors) {
    let sum = 0;
    let shieldsCounter = 0;
    let brokenHelms = 0;
    let helmCounter = 0;
    let swordCounter = 0;
    let broken = 0;
    
    for (let i = 1; i <= lost; i++) {
        if (i % 2 == 0 && i !== 0) {
            sum += helmets;
        } 
        if (i % 3 == 0 && i !== 0) {
            sum += swords;
        }    
        if (i % 2 == 0 && i % 3 == 0) {
                sum += shields;
                shieldsCounter++;
                broken = 0;
        }
        if (shieldsCounter == 2) {
                sum += armors;
                shieldsCounter =0;
        }
            
    }       
        
        
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
    

}
gladiatorExpenses (7,2,3,4,5)
gladiatorExpenses (23,12.50,21.50,40,200)