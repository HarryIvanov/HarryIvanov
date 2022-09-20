function histogram (input) {
    let rolls = Number (input[0]);
    p1 = 0;
    p2 = 0;
    p3 = 0;
    p4 = 0;
    p5 = 0;
    let index = 0;
    let number = input[index];
    index++;
    total = 0;

     for (let i = 1; i <= rolls; i++) {
        number = Number (input[i]);
        if (number < 200) {
        p1 +=1
        } else if (number >= 200 && number <= 399) {
        p2 +=1
        } else if (number >= 400 && number <= 599) {
        p3 +=1
        } else if (number >= 600 && number <= 799) {
        p4 +=1
        } else if (number >= 800) {
        p5 +=1
        } 
    }   total = (p1+p2+p3+p4+p5)
    console.log (`${((p1/total)*100).toFixed(2)}%`)
    console.log (`${((p2/total)*100).toFixed(2)}%`)
    console.log (`${((p3/total)*100).toFixed(2)}%`)
    console.log (`${((p4/total)*100).toFixed(2)}%`)
    console.log (`${((p5/total)*100).toFixed(2)}%`)


}
histogram (["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])
