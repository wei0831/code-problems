/**
 *
 * @author Jack Chang
 */

/**
 * Implementation class
 *
 * @class
 */
function Implementation() {
    "use strict";

    /**
     * countNumbersWithUniqueDigits
     *
     * 0 ≤ x < 10^n
     *
     * f(n)
     * f(0) = 0, 1
     * f(1), 0-9 = 10
     * f(2), ba = 9 * 9
     * f(3), cba = (9 * 9) * 8
     * f(4), dcba = (9 * 9 * 8) * 7
     * f(5) = f(4) * 6
     * f(6)
     * f(7)
     * f(8)
     * f(9)
     * f(10) = f(9) * 1
     * f(11) = f(10) * 0
     *
     * @function
     * @param {number} n
     * @return {number}
     */
    var countNumbersWithUniqueDigits = function(n) {
        if (n === 0) {
            return 1;
        }
        if (n > 10) {
            n = 10;
        }
        var result = 10;
        var available = 9;
        var unique = 9;
        for (var i = 2; i <= n; ++i) {
            unique *= available;
            --available;
            result += unique;
        }
        return result;
    };

    return {
        v1: countNumbersWithUniqueDigits
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     console.log(answer.v1());
// }());

module.exports = Implementation;
