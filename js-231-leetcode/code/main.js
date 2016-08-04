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
    var isPowerOfTwo = function(n) {
        if (n === 0) {
            return false;
        }
        while (n % 2 === 0) {
            n /= 2;
        }
        return (n === 1);
    };

    return {
        v1: isPowerOfTwo
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
