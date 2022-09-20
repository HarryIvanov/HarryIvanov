function trecking (input) {
    let groups = Number (input[0]);
    let Musala = 0;
    let Monblan = 0;
    let Kili = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;
    index = 0;
    let ppl = Number (input[index]);
    index++

    for (let i = 1; i <= groups; i++){
    ppl = Number (input[i]);

    if (ppl <= 5) {
        Musala += ppl
    } else if (ppl >= 6 && ppl <= 12) {
        Monblan += ppl
    } else if (ppl >= 13 && ppl <= 25) {
        Kili += ppl
    } else if (ppl >= 26 && ppl <= 40) {
        k2 += ppl
    } else if (ppl >= 41) {
        everest += ppl
    } 
    } total = everest + k2 + Kili + Monblan + Musala
    console.log (`${(Musala/total*100).toFixed(2)}%`)
    console.log (`${(Monblan/total*100).toFixed(2)}%`)
    console.log (`${(Kili/total*100).toFixed(2)}%`)
    console.log (`${(k2/total*100).toFixed(2)}%`)
    console.log (`${(everest/total*100).toFixed(2)}%`)





}
trecking (["5",
"25",
"41",
"31",
"250",
"6"])