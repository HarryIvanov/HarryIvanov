let count = 5;
let command = "increment";
const parser = {
    increment() {count++},
    decrement() {count--},
    reset() {count = 0}
}
parser[command] ();
console.log(count);