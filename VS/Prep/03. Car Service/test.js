const carService = require("./03. Car Service_Resources");
const { expect } = require("chai");

describe("carService test", function () {
  describe("isItExpensive test", () => {
    it("works fine", () => {
      expect(carService.isItExpensive("Engine")).equal(
        `The issue with the car is more severe and it will cost more money`
      );
    });
    it("works fine", () => {
      expect(carService.isItExpensive("Transmission")).equal(
        `The issue with the car is more severe and it will cost more money`
      );
    });
    it("works fine", () => {
      expect(carService.isItExpensive("Gearbox")).equal(
        `The overall price will be a bit cheaper`
      );
    });
  });
  describe("discount test", () => {
    it("works fine", () => {
      expect(() => {
        carService.discount("a", "a");
      }).to.throw();
    });
    it("works fine", () => {
      expect(() => {
        carService.discount("a", 1);
      }).to.throw();
    });
    it("works fine", () => {
      expect(() => {
        carService.discount(1, "a");
      }).to.throw();
    });
    it("works fine", () => {
      expect(carService.discount(2, 15)).equal("You cannot apply a discount");
    });
    it("works fine", () => {
      expect(carService.discount(3, 150)).equal(
        `Discount applied! You saved 22.5$`
      );
    });
    it("works fine", () => {
      expect(carService.discount(7, 150)).equal(
        `Discount applied! You saved 22.5$`
      );
    });
    it("works fine", () => {
      expect(carService.discount(8, 150)).equal(
        `Discount applied! You saved 45$`
      );
    });
    it("works fine", () => {
      expect(carService.discount(8, 150)).equal(
        `Discount applied! You saved 45$`
      );
    });
  });
  describe("partsToBuy test", () => {
    it("works fine", () => {
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", "coil springs"]
        )
      ).equal(375);
    });
    it ('works fine', () => {
        expect(
          carService.partsToBuy(
            [
              { part: "blowoff valve", price: 145 },
              { part: "coil springs", price: 230 },
            ],
            ["blowoff valve"]
          )
        ).equal(145);
      });
    it ('works fine', () => {
        expect(
          carService.partsToBuy(
            [
              { part: "blowoff valve", price: 145 },
              { part: "coil springs", price: 230 },
            ],
            ["injectors"]
          )
        ).equal(0);
      });
    it ('works fine', () => {
        expect(
          carService.partsToBuy(
            [],
            ["injectors"]
          )
        ).equal(0);
      });
      it("works fine", () => {
        expect(() => {
          carService.partsToBuy("a", "a");
        }).to.throw();
      });
      it("works fine", () => {
        expect(() => {
          carService.partsToBuy(1, "a");
        }).to.throw();
      });
  });
});
