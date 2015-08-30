'use strict';
module.exports.of = function (n) {
    var result = [];
    var factor = 2;
    while (n > 1) {
        for (; n % factor === 0; n = n / factor) {
            result.push(factor);
        }
        factor++;
    }
    if (n > 1)
        result.push(n);
    return result;
};
