function renovation (input) {
let index = 0;
let w = Number (input[index]);
index++;
let l = Number (input[index]);
index++;
let notToBePainted = Number (input[index]);
index++;
let command = input[index];
index++;
let total = 0;
isDone = false;


let allWalls = w * l * 4;
let toBePainted = Math.ceil(allWalls - ( allWalls * notToBePainted) / 100 )

while (command !== "Tired!") {
    let painted = Number (command);
    
    toBePainted -= painted;
    if (toBePainted < 0) {
        let diff = Math.abs(toBePainted);
        console.log(`All walls are painted and you have ${diff} l paint left! `);
        isDone = true;
        break;
    } else if (toBePainted === 0) {
        console.log("All walls are painted! Great job, Pesho!");
        isDone = true;
        break;
    }
    command = input[index];
    index++
}
if (!isDone) {
    console.log(`${toBePainted} quadratic m left.`);
}


}
renovation (["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"])


