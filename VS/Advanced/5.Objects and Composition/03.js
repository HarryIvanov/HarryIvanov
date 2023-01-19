
let count = 5;


const parser = {
    increment() { count++; },
    decrement() { count--; },
    reset() { count = 0;},
    default() {console.log("no such action");}
};
const command = "asd";
parser[command] ? parser[command]() : parser.default();


console.log(count);


