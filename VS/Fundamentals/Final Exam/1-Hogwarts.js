function hogwarts (input) {
    let spell = input.shift();
    let readLine = input.shift();

    while (readLine !== "Abracadabra") {
        let [command,...tokens] = readLine.split(" ");

        if (command == "Abjuration") {
            let tempSpell = ""
            let tempChar = ""
            for (let char of spell) {
                if (char == char.toLowerCase()) {
                    tempChar = char.toUpperCase();
                    tempSpell += tempChar;
                } else {
                    tempSpell += char;
                } 
            }
            spell = tempSpell;
            console.log(spell);
        } else if (command == "Necromancy") {
            let tempSpell = ""
            let tempChar = ""
            for (let char of spell) {
                if (char == char.toUpperCase()) {
                    tempChar = char.toLowerCase();
                    tempSpell += tempChar;
                } else {
                    tempSpell += char;
                } 
            }
            spell = tempSpell;
            console.log(spell);
        } else if (command == "Illusion") {
            let index = Number (tokens[0]);
            let substring = tokens[1];

            if (spell[index]) {
                let char = ""
                for (let i = 0; i < spell.length; i++) {
                    if (i == index) {
                        char = spell[i];
                        break;
                    }
                }
                spell = spell.replace(char, substring);
                console.log("Done!");
            } else {
                console.log("The spell was too weak.");
            }
        } else if (command == "Divination") {
            let wordToReplace = tokens[0];
            let replacement = tokens[1];

            if (spell.includes(wordToReplace)) {
                while (spell.indexOf(wordToReplace) >= 0) {
                    spell = spell.replace(wordToReplace, replacement);
                }
                console.log(spell);
            } 
        } else if (command == "Alteration") {
            let substring = tokens[0];

            if (spell.includes(substring)) {
               spell = spell.replace(substring, "");
                console.log(spell);
            }
        } else {
            console.log("The spell did not work!");
        }



        readLine = input.shift();
    }
}
hogwarts (["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"])


