'use strict';
module.exports.of = function (n) {
    var result = [];
    for (var factor = 2; n > 1; factor++) {
        for (; n % factor === 0; n = n / factor) {
            result.push(factor);
        }
    }

    return result;
};
