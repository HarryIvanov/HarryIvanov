const { expect } = require("chai");
const lookupChar = require ('./03.CharLookup.js');

describe ('Main test', function () {
    it ("the first element is not a string", () => {
        expect(lookupChar(1,1)).equal(undefined)
    })
    it ("the second element is not a Number and the first is a Number", () => {
        expect(lookupChar(1,"a")).equal(undefined)
    })
    it ("the second element is a number but is floating", () => {
        expect(lookupChar("a", 1.5)).equal(undefined)
    })
    it ("the index is -1", () => {
        expect(lookupChar("a", -1)).equal("Incorrect index")
    })
    it ("the index is 10", () => {
        expect(lookupChar("a", 10)).equal("Incorrect index")
    })
    it ("returning the char", () => {
        expect(lookupChar("Harry", 0)).equal("H")
    })
    it ("returning the char", () => {
        expect(lookupChar("Harry", 1)).equal("a")
    })
    it ("returning the char", () => {
        expect(lookupChar("harry", 0)).equal("h")
    })
    it ("returning the char", () => {
        expect(lookupChar("harry", 4)).equal("y")
    })
})