function pirates (input) {
    let cities = {};
    let readLine = input.shift();
    let counter = 0;

    while(readLine !== "Sail") {
        let [city, population, gold] = readLine.split("||");
        population = Number (population);
        gold = Number (gold);

        if(!cities.hasOwnProperty(city)) {
            cities[city] = {population, gold}
            counter++
        } else {
            cities[city].gold += gold;
            cities[city].population += population;
        }

        readLine = input.shift();
    }
    readLine = input.shift();

    while (readLine !== "End") {
        let [command, city, ...tokens] = readLine.split("=>");
        if (command == "Plunder") {
            
            let population = Number (tokens[0]);
            let gold = Number (tokens[1]);
            
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            
            cities[city].gold -= gold;
            cities[city].population -= population;

            if (cities[city].population <= 0 || cities[city].gold <= 0) {
                console.log(`${city} has been wiped off the map!`);
                counter--;
                delete cities[city];
            }

        } else if (command == "Prosper") {
            let gold = Number (tokens[0]);

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
            }
        }


        readLine = input.shift();
    }
    if (!counter > 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`);
        for (const key in cities) {
            console.log(`${key} -> Population: ${cities[key].population} citizens, Gold: ${cities[key].gold} kg`);
        }
    }
}
pirates (["Nassau||95000||1000",
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
