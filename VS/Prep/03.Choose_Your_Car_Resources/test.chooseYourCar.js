const chooseYourCar = require ("./chooseYourCar.js");
const { expect } = require ("chai");

describe ("Car testing", function () {
    describe ("choosingType", () => {
        it("works fine", () => {
            expect(() => {
                chooseYourCar.choosingType("Sedan", "a", 1899);
            }).to.throw();
          })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.choosingType("Sedan", "a", 2023);
            }).to.throw();
          })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.choosingType("Coupe", "a", 1900);
            }).to.throw();
          })
        it ("works fine", () => {
            expect (chooseYourCar.choosingType("Sedan", "a", 2011)).equal("This a Sedan meets the requirements, that you have.");
        })  
        it ("works fine", () => {
            expect (chooseYourCar.choosingType("Sedan", "a", 2010)).equal("This a Sedan meets the requirements, that you have.");
        })  
        it ("works fine", () => {
            expect (chooseYourCar.choosingType("Sedan", "a", 2009)).equal("This Sedan is too old for you, especially with that a color.");
        })  
    })
    describe ("brandName testing", function () {
        it ("works fine", () => {
            expect (chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).equal("BMW, Peugeot");
        }) 
        it ("works fine", () => {
            expect (chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).equal("BMW, Toyota");
        })
        it ("works fine", () => {
            expect (chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).equal("Toyota, Peugeot");
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)
            }).to.throw();
        }) 
        it("works fine", () => {
            expect(() => {
                chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)
            }).to.throw();
        }) 
        it("works fine", () => {
            expect(() => {
                chooseYourCar.brandName("a", 1)
            }).to.throw();
        }) 
        it("works fine", () => {
            expect(() => {
                chooseYourCar.brandName(1, 1)
            }).to.throw();
        }) 
    })
    describe ("CarFuelConsumption testing", function () {
        it ("works fine", () => {
            expect (chooseYourCar.carFuelConsumption(50, 5)).equal("The car burns too much fuel - 10.00 liters!");
        })
        it ("works fine", () => {
            expect (chooseYourCar.carFuelConsumption(50, 2)).equal("The car is efficient enough, it burns 4.00 liters/100 km.");
        })
        it ("works fine", () => {
            expect (chooseYourCar.carFuelConsumption(100, 7)).equal("The car is efficient enough, it burns 7.00 liters/100 km.");
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption("а", 1)
            }).to.throw();
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption("а", "а")
            }).to.throw();
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(1, "а")
            }).to.throw();
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(0, 0)
            }).to.throw();
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(-1, 5)
            }).to.throw();
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(5, -1)
            }).to.throw();
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(-1, -1)
            }).to.throw();
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(5, 0)
            }).to.throw();
        })
        it("works fine", () => {
            expect(() => {
                chooseYourCar.carFuelConsumption(0, 5)
            }).to.throw();
        })
    })     
})