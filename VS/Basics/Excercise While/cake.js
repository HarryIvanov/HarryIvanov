function cake (input) {
    let index = 0;
    let width = Number (input[index]);
    index++
    let length = Number (input[index]);
    index++
    let cake = length * width
    let diff = 0;
    let pcs = 0;
    let i =0;
    let done = true;

    while (i !== `STOP`) {
        pcs = Number (input[index]);
        cake = cake - pcs;
        if (cake < 0) {
            diff = (pcs + cake);
            cake = pcs - diff;
            done = false;
            break;
        }
        index++;
        i = input[index];
        pcs = Number (input[index]);


    }
if (!done) {
    console.log (`No more cake left! You need ${cake} pieces more.`)
} else {
    console.log (`${cake} pieces are left. `)
}


} 
cake (["10",
"2",
"2",
"4",
"6",
"STOP"])

