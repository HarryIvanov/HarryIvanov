function pirates(input) {
    let cities = {};
    let readLine = input.shift();
    let counter = 0;

    while (readLine !== "Sail") {
        let [city, population, gold] = readLine.split("||");
        population = Number(population);
        gold = Number(gold)
        if (cities.hasOwnProperty(city)) {
            cities[city].gold += gold;
            cities[city].population += population;
        } else {
            cities[city] = { population, gold };
            counter++;
        }
        readLine = input.shift()
    }
    readLine = input.shift();

    while (readLine !== "End") {

        let [command, ...tokens] = readLine.split("=>");

        if (command == "Plunder") {
            let town = tokens[0];
            let people = Number(tokens[1]);
            let gold = Number(tokens[2])
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            cities[town].gold -= gold;
            cities[town].population -= people
            if (cities[town].gold <= 0 || cities[town].population <= 0) {
                console.log(`${town} has been wiped off the map!`);
                counter--;
                delete cities[town];
            }

        } else if (command == "Prosper") {
            let town = tokens[0];
            let gold = Number(tokens[1]);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[town].gold += gold
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }
        readLine = input.shift()
    }
    if (counter <= 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`);
        for (const el in cities) {
            console.log(`${el} -> Population: ${cities[el].population} citizens, Gold: ${cities[el].gold} kg`);
        }
    }

}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

