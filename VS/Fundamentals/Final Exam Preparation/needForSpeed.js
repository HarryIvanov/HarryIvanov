function needForSpeed (array) {
    let rotations = Number (array.shift());
    let cars = {}
        for (let i = 0; i < rotations; i++) {
            let [car,mileage,fuel] = array.shift().split("|")
            mileage = Number (mileage), fuel = Number (fuel)
            cars[car] = {mileage, fuel}
        }
        let readLine = array.shift()
        while (readLine !== "Stop") {
            let [command, car, token1, token2] = readLine.split(" : ")
            if (command == "Drive") {
                let distance = Number (token1);
                let fuel = Number (token2);
                let carFuel = Number (cars[car].fuel);
                if (carFuel < fuel) {
                    console.log("Not enough fuel to make that ride");
                } else {
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    cars[car].fuel = carFuel - fuel
                    let carMileage = Number (cars[car].mileage)
                    cars[car].mileage = carMileage + distance
                }
                if (Number (cars[car].mileage) >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car]
                }
                
            } else if (command == "Refuel") {
                let fuel = Number (token1);
                let carFuel = Number (cars[car].fuel)
                if (carFuel + fuel > 75) {
                    cars[car].fuel = 75
                    let top = 75 - carFuel
                    console.log(`${car} refueled with ${top} liters`);
                } else {
                    cars[car].fuel = carFuel + fuel
                    console.log(`${car} refueled with ${fuel} liters`);
                }
            } else if (command == "Revert") {
                let carMileage = Number (cars[car].mileage);
                let mileage = Number (token1);
                if (carMileage - mileage < 10000) {
                    cars[car].mileage = 10000
                } else {
                    cars[car].mileage = carMileage - mileage;
                    console.log(`${car} mileage decreased by ${mileage} kilometers`);
                }
            }

        readLine = array.shift()
        }
        for (const el in cars) {
            console.log(`${el} -> Mileage: ${cars[el].mileage} kms, Fuel in the tank: ${cars[el].fuel} lt.`);       
        }
}
needForSpeed ([
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
  ]
  
  )