function sum (input) {
let index = 0
let n = Number (input[index]);
let command = ""

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let buff = ""
isDone = false;
let sum4 = 0;

for (let a = 1; a <= 9; a++) {
    command = input[index]
    if (isDone) {
        break;
    }
    for (let b = 9; b >= a; b--) {
        if (isDone) {
            break;
        }
        for (let c = 1; c <= 9; c++) {
            if (isDone) {
                break;
            }
            for (let d = 9; d >= c; d--) {
                sum2 = a + b + c + d
                sum1 = a * b * c * d
                sum3 = sum1 / sum2
                sum4 = Math.trunc(sum3)

                if (sum1 === sum2 && command.charAt(2) === "5"){
                    buff = `${a}${b}${c}${d}`
                    isDone = true;
                    break;
                }
                if (sum4 === 3){
                    if(n % sum4 === 0) {
                    buff = `${d}${c}${b}${a}`
                    isDone = true;
                    break;
                }
                } else {
                    continue;
                }
            }
        }
    }
}
if (isDone) {
    console.log(buff);
} else {
    console.log("Nothing found")
}


}
sum (["214"])