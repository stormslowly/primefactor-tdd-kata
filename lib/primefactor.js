'use strict';
module.exports.of = function (n) {
    var result = [];
    if (n > 1) {
        for (; n % 2 === 0; n = n / 2) {
            result.push(2);
        }
        for (; n % 3 === 0; n = n / 3) {
            result.push(3);
        }
    }
    if (n > 1)
        result.push(n);
    return result;
};
