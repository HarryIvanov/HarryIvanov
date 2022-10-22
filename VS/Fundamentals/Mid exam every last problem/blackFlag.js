function blackFlag (array) {
    let days = Number (array[0]);
    let plunderGain = Number (array[1]);
    let targetPlunder = Number (array[2]);
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            totalPlunder += (plunderGain * 1.5)
        } else {
            totalPlunder += plunderGain;
        }   
        if (i % 5 === 0) {
            totalPlunder *= 0.7
        }
    }
    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = ((totalPlunder / targetPlunder)) * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
blackFlag (["10",
"20",
"380"])

