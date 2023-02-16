const rentCar = require("./rentCar");
const { expect } = require("chai");

describe("Tests", function () {
  describe("searchCar", () => {
    it("finds one car", () => {
      const shop = ["a", "b", "c"];
      const model = "a";
      const result = rentCar.searchCar(shop, model);

      expect(result).equal("There is 1 car of model a in the catalog!");
    });
    it("finds two cars", () => {
      const shop = ["a", "b", "a"];
      const model = "a";
      const result = rentCar.searchCar(shop, model);

      expect(result).equal("There is 2 car of model a in the catalog!");
    });
    it("no such car", () => {
      const shop = ["a", "b", "a"];
      const model = "c";

      expect(() => {
        rentCar.searchCar(shop, model);
      }).to.throw();
    });
    it("invalid shop (number)", () => {
      expect(() => {
        rentCar.searchCar(1, "a");
      }).to.throw();
    });

    it("invalid shop (string)", () => {
      expect(() => {
        rentCar.searchCar("a", "a");
      }).to.throw();
    });
    it("invalid model", () => {
      expect(() => {
        rentCar.searchCar(["a", "b", "1"], 1);
      }).to.throw();
    });
  });
  describe("calculatePriceOfCar", () => {
    it ("model is not valid", () => {
      expect(() => {
        rentCar.calculatePriceOfCar(1, 1).to.throw()
      })
    })
    it ("days are not valid", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("a", "a").to.throw()
      })
    })
    it ("valid", () => {
      expect(
        rentCar.calculatePriceOfCar("Volkswagen", 2)).equal(`You choose Volkswagen and it will cost $40!`)
    })
    it ("invalid", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("Lada", 2);
      }).to.throw();
    })
  })
  describe("checkBudget", () => {
    it ("cost is not valid" , () => {
      expect(() => {
        rentCar.checkBudget("a", 1, 1).equal.throw()
      })
    })
    it ("budget is not valid" , () => {
      expect(() => {
        rentCar.checkBudget(1, 1, "a").equal.throw()
      })
    })
    it ("days is not valid" , () => {
      expect(() => {
        rentCar.checkBudget(1, "a", 1).equal.throw()
      })
    })
    it ("days is not valid" , () => {
      expect(() => {
        rentCar.checkBudget(1, "a", 1).equal.throw()
      })
    })
    it ("budget is exact" , () => {
      expect(rentCar.checkBudget(2, 3, 6)).equal(`You rent a car!`)
    })
    it ("budget is more" , () => {
      expect(rentCar.checkBudget(2, 3, 7)).equal(`You rent a car!`)
    })
    it ("budget is low" , () => {
      expect(rentCar.checkBudget(2, 3, 5)).equal('You need a bigger budget!')
    })
  })
});
