function passwordReset (input) {
    let pass = input.shift()
    let index = 0;
    let command = input.shift()

    while (command !== "Done") {
        let [com, token1, token2] = command.split(" ")
        
        if (com == "TakeOdd") {
            let oldLength = pass.length
            let rawPass = ""
            for (let i = 0; i < oldLength; i++) {
                if (i % 2 !== 0) {
                    let char = pass[i]
                    rawPass += char
                }
            }
            pass = rawPass
            console.log(pass);
        } else if (com == "Cut") {
            let passInd = Number (token1);
            let length = Number (token2);
            let rawPass = pass.substring(passInd, passInd + length);
            pass = pass.replace(rawPass, "")
            console.log(pass);
        } else if (com == "Substitute") {
            let num = pass.indexOf(token1)
            if (num >= 0) {
            while (pass.indexOf(token1) >= 0) {
                pass = pass.replace(token1, token2)
            }
            console.log(pass);
            } else {
                console.log("Nothing to replace!");
            }   
        }    
        command = input.shift()
    }
    console.log(`Your password is: ${pass}`);
}
passwordReset (["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

