'use strict';
var expect = require('chai').expect;

var PrimeFactor = require('../lib/primefactor.js');

describe('PrimeFactor', function () {

    it('primeFactor dive number to prime array', function () {
        expect(PrimeFactor.of(1)).to.deep.equal([]);
        expect(PrimeFactor.of(2)).to.deep.equal([2]);

    });


});
