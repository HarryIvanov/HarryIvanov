function mountain (input) {
let record = Number (input[0]);
let distance = Number (input[1]);
let time = Number (input[2]);

let secondsDistance = distance * time
let slowing = distance / 50
let slowingSecs = Math.floor(slowing) * 30
let totalTime = secondsDistance + slowingSecs
let diff = 0;


if ( totalTime < record) {
    console.log (`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
} else {
    diff = totalTime - record
    console.log (`No! He was ${diff.toFixed(2)} seconds slower.`)
}








}
mountain (["5554.36",
"1340",
"3.23"])


