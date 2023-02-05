const { expect } = require("chai");
const mathEnforcer = require ('./04.MathEnforcer.js');

describe ("Main test", function (){
    describe ("addFive", ()=> {
        it("the parameter is a string", ()=> {
            expect(mathEnforcer.addFive("a")).equal(undefined)
        })
        it("to add Five if the parameter is a number", ()=> {
            expect(mathEnforcer.addFive(6)).equal(11)
        })
        it("to add Five if the parameter is a number", ()=> {
            expect(mathEnforcer.addFive(-5)).equal(0)
        })
        it("to add Five if the parameter is a number", ()=> {
            expect(mathEnforcer.addFive(-10)).equal(-5)
        })
        it("to add Five if the parameter is a number", ()=> {
            expect(mathEnforcer.addFive(3.14)).closeTo(8.14, 0.001)
        })
        it("to add Five if the parameter is a number", ()=> {
            expect(mathEnforcer.addFive(-5.14)).closeTo(-0.14, 0.001)
        })
    })
    describe ("subtractTen", ()=> {
        it("the parameter is a string", ()=> {
            expect(mathEnforcer.subtractTen("a")).equal(undefined)
        })
        it("to subtract ten if the parameter is a number", ()=> {
            expect(mathEnforcer.subtractTen(10)).equal(0)
        })
        it("to subtract ten if the parameter is a number", ()=> {
            expect(mathEnforcer.subtractTen(0)).equal(-10);
        })
        it("to subtract ten if the parameter is a number", ()=> {
            expect(mathEnforcer.subtractTen(-20)).equal(-30);
        })
        it("to subtract ten if the parameter is a number", ()=> {
            expect(mathEnforcer.subtractTen(20)).equal(10);
        })
        it("to subtract ten if the parameter is a number", ()=> {
            expect(mathEnforcer.subtractTen(3.14)).closeTo(-6.86, 0.001);
        })
        it("to subtract ten if the parameter is a number", ()=> {
            expect(mathEnforcer.subtractTen(-3.14)).closeTo(-13.86, 0.001);
        })
        
    })
    describe ("sum", ()=> {
        it("the parameter is a string", ()=> {
            expect(mathEnforcer.sum("a",1)).equal(undefined)
        })
        it("the parameter is a string", ()=> {
            expect(mathEnforcer.sum(1,"a")).equal(undefined)
        })
        it("the parameter is a string", ()=> {
            expect(mathEnforcer.sum("a","a")).equal(undefined)
        })
        it("the parameter is a ok", ()=> {
            expect(mathEnforcer.sum(1,1)).equal(2)
        })
        it("the parameter is a ok", ()=> {
            expect(mathEnforcer.sum(1,-1)).equal(0)
        })
        it("the parameter is a ok", ()=> {
            expect(mathEnforcer.sum(-1,1)).equal(0)
        })
        it("the parameter is a ok", ()=> {
            expect(mathEnforcer.sum(-1,-1)).equal(-2)
        })
        it("the parameter is a ok", ()=> {
            expect(mathEnforcer.sum(-3.14,-1)).closeTo(-4.14, 0.001)
        })
        it("the parameter is a ok", ()=> {
            expect(mathEnforcer.sum(-3.14, 1)).closeTo(-2.14, 0.001)
        })
        it("the parameter is a ok", ()=> {
            expect(mathEnforcer.sum(3.14, -1)).closeTo(2.14, 0.001)
        })
        it("the parameter is a ok", ()=> {
            expect(mathEnforcer.sum(3.14, 3.14)).closeTo(6.28, 0.001)
        })
    })
})