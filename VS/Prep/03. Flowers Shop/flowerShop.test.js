const flowerShop = require('./flowerShop.js');
const { expect } = require('chai');

describe ("flowerShop tests", function () {
    describe('calcPriceOfFlowers test', () => {
        it ('works fine', () => {
            expect (flowerShop.calcPriceOfFlowers("a", 1, 3)).equal("You need $3.00 to buy a!")
        })
        it ('works fine', () => {
            expect (flowerShop.calcPriceOfFlowers("a", 2, 3)).equal("You need $6.00 to buy a!")
        })
        it ('works fine', () => {
            expect (() => {flowerShop.calcPriceOfFlowers("a", "a", 3)}).to.throw()
        })
        it ('works fine', () => {
            expect (() => {flowerShop.calcPriceOfFlowers("a", 1, "a")}).to.throw()
        })
        it ('works fine', () => {
            expect (() => {flowerShop.calcPriceOfFlowers(1, 1, 1)}).to.throw()
        })
    })
    describe('checkFlowersAvailable test', () => {
        it ('works fine', () => {
            expect (flowerShop.checkFlowersAvailable("b", ["a","b","c"])).equal(`The b are available!`)
        })
        it ('works fine', () => {
            expect (flowerShop.checkFlowersAvailable("d", ["a","b","c"])).equal(`The d are sold! You need to purchase more!`)
        })
    })
    describe ('sellFlowers test', () => {
        it ('works fine', () => {
            expect (flowerShop.sellFlowers(["a","b","c"], 2)).equal("a / b")
        })
        it ('works fine', () => {
            expect (flowerShop.sellFlowers(["a","b","c"], 1)).equal("a / c")
        })
        it ('works fine', () => {
            expect (flowerShop.sellFlowers(["a","b","c"], 0)).equal("b / c")
        })
        it ('works fine', () => {
            expect (() => {flowerShop.sellFlowers("a", 1)}).to.throw()
        })
        it ('works fine', () => {
            expect (() => {flowerShop.sellFlowers("a", 1)}).to.throw()
        })
        it ('works fine', () => {
            expect (() => {flowerShop.sellFlowers(1, "a")}).to.throw()
        })
    })
})