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
     * @function
     * @param {number} n
     * @return {boolean}
     */
    var isPowerOfThree = function(n) {
        if (n === 0) {
            return false;
        }

        while (n % 3 === 0) {
            n /= 3;
        }

        return n === 1;
    };

    /**
     * Limitation of INT 3^19 = 1162261467
     *
     * @function
     * @param {number} n
     * @return {boolean}
     */
    var isPowerOfThree_v2 = function(n) {
        return n > 0 && 1162261467 % n === 0;
    };

    return {
        v1: isPowerOfThree,
        v2: isPowerOfThree_v2
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
