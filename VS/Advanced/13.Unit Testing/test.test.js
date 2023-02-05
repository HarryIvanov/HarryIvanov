const { expect } = require ('chai')
const sum = require ('./test.js')

describe ('Main Test', function () {
    it('works with whole numbers', function () {
        expect(sum (2, 4 )).to.equal(6)
    })
    it('works with floating-point numbers', function () {
        expect(sum (0.1, 0.2)).closeTo(0.3, 0.5)
    })
})