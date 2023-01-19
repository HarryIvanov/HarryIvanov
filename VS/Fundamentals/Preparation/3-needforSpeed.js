function needforSpeed (input) {
    let rotations = Number (input.shift());
    let garage = {};

    for (let i = 0; i < rotations; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        mileage = Number (mileage);
        fuel = Number (fuel);
        garage[car] = {mileage, fuel}
    }
    let readLine = input.shift();

    while (readLine !== "Stop") {
        let [command, ...additional] = readLine.split(" : ");
        if (command == "Drive") {
            let car = additional[0];
            let distance = Number (additional[1]);
            let fuel = Number (additional[2]);

            if (garage[car].fuel - fuel < 0) {
                console.log("Not enough fuel to make that ride");
            } else {
                garage[car].fuel -= fuel;
                garage[car].mileage += distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (garage[car].mileage >= 100000) {
                delete garage[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else if (command == "Refuel") {
            let car = additional[0];
            let fuel = Number (additional[1]);

            if (garage[car].fuel + fuel > 75) {
                let sum = 75 - garage[car].fuel
                console.log(`${car} refueled with ${sum} liters`);
                garage[car].fuel = 75;

            } else {
                garage[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (command == "Revert") {
            let car = additional[0];
            let mileage = Number (additional[1]);

            if(garage[car].mileage - mileage < 10000) {
                garage[car].mileage = 10000;
            } else {
                garage[car].mileage -= mileage;
                console.log(`${car} mileage decreased by ${mileage} kilometers`);
            }
        }
        readLine = input.shift();
    }
    for (const car in garage) {
        console.log(`${car} -> Mileage: ${garage[car].mileage} kms, Fuel in the tank: ${garage[car].fuel} lt.`);
    }
}
needforSpeed ([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])