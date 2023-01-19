function passwordReset (input) {
    let password = input.shift();
    let readLine = input.shift();

    while (readLine !== "Done") {
        if (readLine == "TakeOdd") {
            let newPass = ""
            for (let i = 0; i < password.length; i++) {
                if (i % 2 === 1) {
                    let char = password[i];
                    newPass += char
                }
            }
            password = newPass
            console.log(password);
        }
        let [command, ...tokens] = readLine.split(" ")
        if (command == "Cut") {
            let startIndex = Number (tokens[0]);
            let length = startIndex + Number (tokens[1])
            let passToDelete = password.substring(startIndex, length);
            password = password.replace(passToDelete, "");
            console.log(password);
        } else if (command == "Substitute") {
            let substring = tokens[0];
            let replaceWith = tokens[1];
            if (password.includes(substring)) {
                while (password.indexOf(substring) >= 0){
                    password = password.replace(substring, replaceWith)
                }
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
        readLine = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset (["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

