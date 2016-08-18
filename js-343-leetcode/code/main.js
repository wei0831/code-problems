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
     * private Function
     *
     * f(2)  = 1 + 1 = 1
     * f(3)  = 1 + 2 = 2
     * f(4)  = 2 + 2 = 4
     * f(5)  = 2 + 3 = 6
     * f(6)  = 3 + 3 = 9
     * f(7)  = 2 + 2 + 3 = 12
     * f(8)  = 2 + 3 + 3 = 18
     * f(9)  = 3 + 3 + 3 = 27
     * f(10) = 2 + 2 + 3 + 3 = 36
     *
     * @function
     * @param {number} n
     * @return {number}
     */
    var integerBreak = function(n) {
        var table = [-1, -1];

        for (var i = 2; i <= 6 && i <= n; ++i) {
            var half = Math.floor(i / 2);
            table[i] = half * (i - half);
        }

        for (var j = 7; j <= n; ++j) {
            table[j] = Math.max(2 * table[j - 2], 3 * table[j - 3]);
        }

        return table[n];
    };

    return {
        v1: integerBreak
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
