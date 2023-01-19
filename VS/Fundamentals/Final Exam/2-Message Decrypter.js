function messageDecrypter (input) {
let rotations = Number (input.shift());
let regExp = /\B([$]|[%])(?<tag>[A-Z][a-z]{2,})\1(: )\[(?<group1>\d+)\]\|\[(?<group2>\d+)\]\|\[(?<group3>\d+)\]\|\B$/

    for(let i = 0; i < rotations; i++) {
        let readLine = input.shift();
        let tempMsg = "";

        let matched = regExp.exec(readLine)
        if (matched) {
            let firstChar = String.fromCharCode(matched.groups["group1"]);
            let secondChar = String.fromCharCode(matched.groups["group2"]);
            let thirdChar = String.fromCharCode(matched.groups["group3"]);
            tempMsg = firstChar + secondChar + thirdChar

            console.log(`${matched.groups["tag"]}: ${tempMsg}`);
            
            
        } else {
            console.log("Valid message not found!");
        }
        

        
    }
}
messageDecrypter (["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"])


