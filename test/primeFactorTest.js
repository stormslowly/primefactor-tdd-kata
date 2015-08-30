'use strict';
var expect = require('chai').expect;

describe('PrimeFactor', function () {

    it('primeFactor of 1 is empty', function () {
        expect(PrimeFactor.of(1)).to.deep.equal([]);
    });

});
