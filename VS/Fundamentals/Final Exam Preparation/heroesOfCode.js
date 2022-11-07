function heroesOfCode (input) {
    let heroes = {};
    let rotations = Number (input.shift())

    for (let i = 0; i < rotations; i++) {
        let [hero, hp, mp] = input.shift().split(" ")
        heroes[hero] = {hp, mp}
    }
    let readLine = input.shift()
    while (readLine !== "End") {
        let [command, heroName, num1, num2] = readLine.split(" - ")
        if (command == "CastSpell") {
            if (Number (heroes[heroName].mp) >= Number (num1)) {
                let n1 = Number (heroes[heroName].mp)
                num1 = Number (num1) 
                heroes[heroName].mp = n1 - num1
                console.log(`${heroName} has successfully cast ${num2} and now has ${heroes[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${num2}!`);
            }
        } else if ( command == "TakeDamage") {
            let n1 = Number (heroes[heroName].hp);
            num1 = Number (num1);
            heroes[heroName].hp = n1 - num1
            if (heroes[heroName].hp > 0) {
              console.log(`${heroName} was hit for ${num1} HP by ${num2} and now has ${heroes[heroName].hp} HP left!`);  
            } else {
                console.log(`${heroName} has been killed by ${num2}!`);
                delete heroes[heroName]
            }
        } else if (command == "Recharge") {
            let n1 = Number (heroes[heroName].mp)
            num1 = Number (num1)
            heroes[heroName].mp = n1 + num1
            if (heroes[heroName].mp > 200) {
                heroes[heroName].mp = 200
                let sum = 200 - n1
                console.log(`${heroName} recharged for ${sum} MP!`);
            } else {
                console.log(`${heroName} recharged for ${num1} MP!`);
            }
        } else if (command == "Heal") {
            let n1 = Number (heroes[heroName].hp)
            num1 = Number (num1)
            heroes[heroName].hp = n1 + num1
            if (heroes[heroName].hp > 100) {
                heroes[heroName].hp = 100
                let sum = 100 - n1
                console.log(`${heroName} healed for ${sum} HP!`);
            } else {
                console.log(`${heroName} healed for ${num1} HP!`);
            }
        }
        readLine = input.shift()
    }
    for (const element in heroes) {
       console.log(`${element} \n HP: ${heroes[element].hp} \n MP: ${heroes[element].mp}`);     
    }
    

}
heroesOfCode (["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
    ])