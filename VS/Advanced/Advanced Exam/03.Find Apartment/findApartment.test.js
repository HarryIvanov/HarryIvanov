const findNewApartment = require('./findApartment.js');
const {expect} = require('chai');

describe ("findNewApartment tests", function () {
    describe ('isGoodLocation test', () => {
        it ('works fine', () => {
            expect (findNewApartment.isGoodLocation('Bourgas', true)).equal("This location is not suitable for you.")
        })
        it ('works fine', () => {
            expect (findNewApartment.isGoodLocation('Sofia', false)).equal("There is no public transport in area.")
        })
        it ('works fine', () => {
            expect (findNewApartment.isGoodLocation('Sofia', true)).equal("You can go on home tour!" )
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isGoodLocation("a","")).throw()
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isGoodLocation(1,"")).throw()
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isGoodLocation([],1)).throw()
        })
    })
    describe ("isLargeEnough test", () => {
        it ("works fine", () => {
            expect (findNewApartment.isLargeEnough([40, 50, 60], 40)).equal("40, 50, 60")
        })
        it ("works fine", () => {
            expect (findNewApartment.isLargeEnough([40, 50, 60], 50)).equal("50, 60")
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isLargeEnough([],30)).throw()
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isLargeEnough("",30)).throw()
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isLargeEnough("","30")).throw()
        })
    })
    describe ("isItAffordable test", () => {
        it ("works fine", () => {
            expect (findNewApartment.isItAffordable(50, 40)).equal("You don't have enough money for this house!")
        })
        it ("works fine", () => {
            expect (findNewApartment.isItAffordable(40, 40)).equal("You can afford this home!")
        })
        it ("works fine", () => {
            expect (findNewApartment.isItAffordable(40, 50)).equal("You can afford this home!")
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isItAffordable(0,0)).throw()
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isItAffordable(-1,-1)).throw()
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isItAffordable("-1",5)).throw()
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isItAffordable(5,"5")).throw()
        })
        it ('works fine', () => {
            expect (() => findNewApartment.isItAffordable("5","5")).throw()
        })
    })
})