function ratings (input) {
let index = 0;
let movies = Number (input[index]);
index++;
let lowest = 0;
let highest = 0;
let average = 0;
let highestMovie = "";
let lowestMovie = "";



for (let i = 0; i < movies; i++) {
    let currentMovie = input[index];
    index++;
    let rating = Number (input[index]);
    
        if (rating >= highest) {
            highest = rating;
            highestMovie = currentMovie;
            lowest = rating;
        } 
        if (rating <= lowest) {
            lowest = rating;
            lowestMovie = currentMovie;
        }
     
    index++;
    average += rating;
}
let avrating = average / movies
console.log(`${highestMovie} is with highest rating: ${highest.toFixed(1)}`);
console.log(`${lowestMovie} is with lowest rating: ${lowest.toFixed(1)}`);
console.log(`Average rating: ${avrating.toFixed(1)}`);




}
ratings (["3",
"Interstellar",
"8.5",
"Dangal",
"8.2",
"Green Book",
"8.2"])
