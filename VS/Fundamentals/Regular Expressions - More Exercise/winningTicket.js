function winningTicket (input) {
let separator = /[ ]*[,][ ]*/g;
let readLine = input.split(separator);
let winningTicketRegExp = /([\^]{6,10})|([\#]{6,10})|([\$]{6,10})|([\@]{6,10})/g

for (const word of readLine) {
    let length = word.length;
    let leftSideIndex = length / 2
    let leftSide = word.substring(0, leftSideIndex);
    let rightSide = word.substring(leftSideIndex);
    if (length == 20) {
        let leftMatch = leftSide.match(winningTicketRegExp);
        let rightMatch = rightSide.match(winningTicketRegExp);
        if (rightMatch && leftMatch) {
        let leftSideCheck = leftMatch.toString()[0];
        let rightSideCheck = rightMatch.toString()[0];

        if (leftSideCheck === rightSideCheck) {
            let leftLCheck = leftMatch.join("").length;
            let rightLCheck = rightMatch.join("").length;
            let lengthCheck = leftLCheck + rightLCheck
            if (lengthCheck == 20) {
                console.log(`ticket "${word}" - ${leftLCheck}${leftSideCheck} Jackpot!`);
            } else {
                console.log(`ticket "${word}" - ${leftLCheck}${leftSideCheck}`);
            }
        } else {
            console.log(`ticket "${word}" - no match`);
        }

        } else {
            console.log(`ticket "${word}" - no match`);
        }    
       
    } else {
        console.log("invalid ticket");
    }
}

    
}
winningTicket ("12345678910111213112")