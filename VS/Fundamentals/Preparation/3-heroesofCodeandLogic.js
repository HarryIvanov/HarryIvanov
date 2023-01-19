function heroesofCodeandLogic (input) {
    let rotations = Number (input.shift());
    let heroes = {};

    for (let i = 0; i < rotations; i++) {
        let [heroName, hp, mp] = input.shift().split(" ");
        hp = Number (hp);
        mp = Number (mp);
        if (hp > 100) {
            hp = 100;
        }
        if (mp > 200) {
            mp = 200
        }
        heroes[heroName] = {hp, mp}
    }
    let readLine = input.shift();

    while (readLine !== "End") {
        let [command, heroName, ...tokens] = readLine.split(" - ");

        if (command == "CastSpell") {
            let neededMana = Number (tokens[0]);
            let spellName = tokens[1];
            let heroMana = Number (heroes[heroName].mp)

            if ( heroMana >= neededMana) {
                heroes[heroName].mp -= neededMana;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command == "TakeDamage") {
            let dmg = Number (tokens[0]);
            let attacker = tokens[1];
            heroes[heroName].hp -= dmg;
            let heroHp = heroes[heroName].hp;
            if (heroHp <= 0) {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            } else {
                console.log(`${heroName} was hit for ${dmg} HP by ${attacker} and now has ${heroHp} HP left!`);
            }
        } else if (command == "Recharge") {
            let mpRecharge = Number (tokens[0]);
            let sumMP = mpRecharge + heroes[heroName].mp;
            if (sumMP > 200) {
                let recharged = 200 - heroes[heroName].mp
                heroes[heroName].mp = 200;
                console.log(`${heroName} recharged for ${recharged} MP!`);
            } else {
                heroes[heroName].mp = sumMP
                console.log(`${heroName} recharged for ${mpRecharge} MP!`);
            }
        } else if (command == "Heal") {
            let hpRecharge = Number (tokens[0]);
            let sumHp = hpRecharge + heroes[heroName].hp;
            if (sumHp > 100) {
                let recharged = 100 - heroes[heroName].hp
                heroes[heroName].hp = 100;
                console.log(`${heroName} healed for ${recharged} HP!`);
            } else {
                heroes[heroName].hp = sumHp
                console.log(`${heroName} healed for ${hpRecharge} HP!`);
            }
        }

        readLine = input.shift()
    }
for (const hero in heroes) {
    console.log(`${hero}\n HP: ${heroes[hero].hp}\n MP: ${heroes[hero].mp}`);
}

}
heroesofCodeandLogic (["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]
    )