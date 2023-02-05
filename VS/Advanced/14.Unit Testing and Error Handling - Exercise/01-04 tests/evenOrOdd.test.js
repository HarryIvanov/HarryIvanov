const { expect } = require("chai");
const isOddOrEven = require ('./02.EvenOrOdd.js');

describe ('Main test', function () {
    it("is not a string", () => {
        expect(isOddOrEven(1)).equal(undefined)
    })
    it("is even string", () => {
        expect(isOddOrEven("aa")).equal("even")
    })
    it("is odd string", () => {
        expect(isOddOrEven("a")).equal("odd")
    })

})
