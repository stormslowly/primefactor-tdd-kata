'use strict';
var expect = require('chai').expect;

var PrimeFactor = require('../lib/primefactor.js');

describe('PrimeFactor', function () {

    it('primeFactor dive number to prime array', function () {
        expect(PrimeFactor.of(1)).to.deep.equal([]);
        expect(PrimeFactor.of(2)).to.deep.equal([2]);
        expect(PrimeFactor.of(3)).to.deep.equal([3]);
        expect(PrimeFactor.of(4)).to.deep.equal([2, 2]);
        expect(PrimeFactor.of(5)).to.deep.equal([5]);
        expect(PrimeFactor.of(6)).to.deep.equal([2, 3]);
        expect(PrimeFactor.of(7)).to.deep.equal([7]);
        expect(PrimeFactor.of(8)).to.deep.equal([2, 2, 2]);
        expect(PrimeFactor.of(9)).to.deep.equal([3,3]);

    });


});
