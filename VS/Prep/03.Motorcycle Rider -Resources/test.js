const motorcycleRider = require("./Motorcycle Rider");
const { expect } = require("chai");

describe("Tests", function () {
  describe("licenseRestriction test", function () {
    it("works fine", () => {
      expect(motorcycleRider.licenseRestriction("AM")).equal(
        "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
      );
    });
    it("works fine", () => {
      expect(motorcycleRider.licenseRestriction("A1")).equal(
        "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
      );
    });
    it("works fine", () => {
      expect(motorcycleRider.licenseRestriction("A2")).equal(
        "Motorcycles with maximum power of 35KW. and the minimum age is 18."
      );
    });
    it("works fine", () => {
      expect(motorcycleRider.licenseRestriction("A")).equal(
        "No motorcycle restrictions, and the minimum age is 24."
      );
    });
    it("not working", () => {
      expect(() => {
        motorcycleRider.licenseRestriction(["AM", "A1", "A2", "A"], "B");
      }).to.throw();
    });
  });
  describe("motorcycleShowroom test", function () {
    it("works fine", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom("a", 1);
      }).to.throw();
    });
    it("works fine", () => {
      let a = [1,2,3,4];
      let b = 49;
      expect(() => {
        motorcycleRider.motorcycleShowroom(a, b);
      }).to.throw();
    });
    it("works fine", () => {
      let a = [];
      let b = 49;
      expect(() => {
        motorcycleRider.motorcycleShowroom(a, b);
      }).to.throw();
    });
    it("works fine", () => {
      let a = "a";
      let b = 49;
      expect(() => {
        motorcycleRider.motorcycleShowroom(a, b);
      }).to.throw();
    });
    it("works fine", () => {
      let a = [1,2,3];
      let b = "a"
      expect(() => {
        motorcycleRider.motorcycleShowroom(a, b);
      }).to.throw();
    });
    it("works fine", () => {
      let a = "b";
      let b = "a"
      expect(() => {
        motorcycleRider.motorcycleShowroom(a, b);
      }).to.throw();
    });
    it("works fine", () => {
      let a = [55, 100, 600];
      let b = 800
      expect(motorcycleRider.motorcycleShowroom(a,b)).equal(`There are 3 available motorcycles matching your criteria!`)
    });
    it("works fine", () => {
      let a = [49, 100, 600];
      let b = 800
      expect(motorcycleRider.motorcycleShowroom(a,b)).equal(`There are 2 available motorcycles matching your criteria!`)
    });
    it("works fine", () => {
      let a = [600];
      let b = 800
      expect(motorcycleRider.motorcycleShowroom(a,b)).equal(`There are 1 available motorcycles matching your criteria!`)
    });
    it("works fine", () => {
      let a = [800];
      let b = 800
      expect(motorcycleRider.motorcycleShowroom(a,b)).equal(`There are 1 available motorcycles matching your criteria!`)
    });
  });
  describe ("otherSpendings test", () => {
    it ('works fine', () => {
        expect (motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true)).equal("You spend $540.00 for equipment and consumables with 10% discount!")
    })
    it ('works fine', () => {
        expect (motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false)).equal("You spend $600.00 for equipment and consumables!")
    })
    it ('works fine', () => {
        expect (motorcycleRider.otherSpendings(["helmet"], ["engine oil"], false)).equal("You spend $270.00 for equipment and consumables!")
    })
    it ('works fine', () => {
        expect (motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true)).equal("You spend $243.00 for equipment and consumables with 10% discount!")
    })
    it("works fine", () => {
        let a = "b";
        let b = "a";
        let c = "a"
        expect(() => {
          motorcycleRider.otherSpendings(a, b, c);
        }).to.throw();
      });
    it("works fine", () => {
        let a = [];
        let b = [];
        let c = "a"
        expect(() => {
          motorcycleRider.otherSpendings(a, b, c);
        }).to.throw();
      });
  })

});
