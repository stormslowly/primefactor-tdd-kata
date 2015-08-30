'use strict';
module.exports.of = function (n) {
    var result = [];
    if (n > 1) {
        while (n % 2 === 0) {
            result.push(2);
            n = n / 2;
        }
        if (n > 1)
            result.push(n);
    } else {
        return result;
    }

    return result;
};
