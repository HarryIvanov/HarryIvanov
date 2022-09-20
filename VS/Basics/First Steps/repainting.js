function repainting (input) {
    let nylon = Number (input[0]);
    let paint = Number (input[1]);
    let thinner = Number (input[2]);
    let hours = Number (input[3]);
    let paintPercent = paint * 0.10
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + paintPercent) * 14.50;
    let thinnerPrice = thinner * 5;
    let handbags = 0.40;
    let materialSum = nylonPrice + paintPrice + thinnerPrice + handbags;
    let percent = materialSum * 0.30
    let ppl =  percent * hours;
    let sumAll = ppl + materialSum
    console.log (sumAll);
}
repainting ([`5`, `10`, `10`, `1`])