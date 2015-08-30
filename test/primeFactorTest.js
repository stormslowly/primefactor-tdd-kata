'use strict';
var expect = require('chai').expect;

var PrimeFactor = require('../lib/primefactor.js');

describe('PrimeFactor', function () {

    it('primeFactor of 1 is empty', function () {
        expect(PrimeFactor.of(1)).to.deep.equal([]);
    });

});
