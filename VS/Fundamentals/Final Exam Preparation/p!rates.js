function Pirates (input) {
    
  let targetCities = {};
  let command = input.shift()
        while (command !== "Sail") {
            let [city, population, gold] = command.split("||")
            population = Number (population)
            gold = Number (gold)
            if (!targetCities.hasOwnProperty(city)) {
                targetCities[city] = {population, gold}
            } else {
                let oldGold = Number (targetCities[city].gold)
                let oldPopulation = Number (targetCities[city].population)
                targetCities[city].gold = oldGold + gold,
                targetCities[city].population = oldPopulation + population
            }
            command = input.shift()
        }
        command = input.shift()
     while (command !== "End") {
        let [com, city, people, gold] = command.split("=>")
            people = Number (people)
            gold = Number (gold)    
        if (com == "Plunder") {
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                let oldGold = Number (targetCities[city].gold)
                let oldPop = Number (targetCities[city].population)
                targetCities[city].gold = oldGold - gold 
                targetCities[city].population = oldPop - people
                if (targetCities[city].gold <= 0 || targetCities[city].population <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete targetCities[city];
                } 
            } else if (com == "Prosper") {
                if (people < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    let oldGold = Number (targetCities[city].gold)
                    targetCities[city].gold = oldGold + people
                    console.log(`${people} gold added to the city treasury. ${city} now has ${targetCities[city].gold} gold.`);
                }
            }
            command = input.shift()
     }   
    let length = Object.keys(targetCities).length;
    if (length > 0) {
    console.log(`Ahoy, Captain! There are ${length} wealthy settlements to go to:`);
    for (let key in targetCities) {
        console.log(`${key} -> Population: ${targetCities[key].population} citizens, Gold: ${targetCities[key].gold} kg`);
    }
} else {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
}
    
}
Pirates (["Nassau||95000||1000",
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

