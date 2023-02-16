class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (
      !this._validateModel(model) ||
      !this._validateHorsepower(horsepower) ||
      !this._validatePriceAndMileage(price) ||
      !this._validatePriceAndMileage(mileage)) {
        throw new TypeError ('Invalid')
    }
    let result = {};
    result.model = model;
    result.horsepower = horsepower;
    result.price = price;
    result.mileage = mileage;
    this.availableCars.push(result);
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
  }
  sellCar(model, desiredMileage) {
    const index = this.availableCars.findIndex((c) => c.model == model);
    const match = this.availableCars[index];

    if (match == undefined) {
      return `${model} was not found!`;
    }
    let car = match;
    let check = car.mileage - desiredMileage;
    let price = 0;
    if (check <= 0) {
      price = car.price;
    } else if (check <= 40000) {
      price = car.price * 0.95;
    } else {
      price = car.price * 0.9;
    }
    this.availableCars.splice(index, 1);
    car.price = price;
    this.totalIncome += price;
    this.soldCars.push(car);
    return `${model} was sold for ${price.toFixed(2)}$`;
  }
  currentCar() {
    if (this.availableCars.length == 0) {
      return "There are no available cars";
    }
    let result = [
      "-Available cars:",
      ...this.availableCars.map(
        (c) =>
          `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
            2
          )} km - ${c.price.toFixed(2)}$`
      ),
    ];

    return result.join("\n");
  }
  salesReport(criteria) {
    if (criteria == "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error("Invalid criteria!");
    }

    const result = this.soldCars.map(
      (c) => `---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$`
    );
    result.unshift(`-${this.soldCars.length} cars sold:`);
    result.unshift(
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    );

    return result.join("\n");
  }
  _validateModel(value) {
    return typeof value == "string" && value != "";
  }
  _validateHorsepower(value) {
    return Number.isInteger(value) && value >= 0;
  }
  _validatePriceAndMileage(value) {
    return typeof value == "number" && value >= 0;
  }
}
let dealership = new CarDealership("SoftAuto");
console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
console.log(dealership.addCar("Golf", 100, 3500, 190000));
console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
console.log(dealership.addCar("Audi A3", 120, 4900, 240000));
console.log(dealership.sellCar("Toyota Corolla", 230000));
console.log(dealership.sellCar("Mercedes C63", 110000));
console.log(dealership.sellCar("Audi A3", 210000));
console.log(dealership.salesReport("horsepower"));
console.log(dealership.currentCar());
