function solve (input){
    let a = Number (input [0]);
    if (a < 10 && a > 3 && a % 2 === 0) {
        console.log (`${a} is bigger then 3, smaller then 10 and it's even number`)
        // && and
    } else if (a >= 10 || a < 3) {
        // || or
        console.log ( `${a} is biggber then 10 or smaller then 3`)
    } 
}
solve ([2])
//! otricanie