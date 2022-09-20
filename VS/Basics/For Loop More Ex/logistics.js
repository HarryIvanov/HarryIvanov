function logistics (input) {
let index = 0;
let loops = Number (input[index]);
index++;

let bus = 0;
let truck = 0;
let train = 0;
let total = 0;

    for (let i = 0; i < loops; i++) {
        let cargo = Number (input[index]);
        if (cargo <= 3) {
            bus += cargo
        } else if (cargo >= 4 && cargo <= 11) {
            truck += cargo 
        } else {
            train += cargo
        }
        total += cargo
        index++
    }
    let average = (bus * 200 + truck * 175 + train * 120) / total
    console.log(`${average.toFixed(2)}`);
    console.log(`${((bus/total)*100).toFixed(2)}%`);
    console.log(`${((truck/total)*100).toFixed(2)}%`);
    console.log(`${((train/total)*100).toFixed(2)}%`);
}
logistics (["4", "1", "5", "16", "3"])