function lunch (input) {
let movie = input[0];
let episode = Number (input[1]);
let time = Number (input[2]);
let lunch = (time / 8);
let rest = (time / 4);
let totalTime =  (time - rest - lunch);
let num = 0;


if (totalTime > episode) {
    let num =  (totalTime - episode);
    console.log (`You have enough time to watch ${movie} and left with ${Math.ceil(num)} minutes free time.`);
} 
    else if (totalTime <= episode) {
    let num = (episode - totalTime);
    console.log (`You don't have enough time to watch ${movie}, you need ${Math.ceil(num)} more minutes.`)
}


}
lunch (["Teen Wolf",
"48",
"60"])
