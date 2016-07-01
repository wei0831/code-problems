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
     * Add without using + or - operator
     *
     * @function
     * @param {number} a - Number 1
     * @param {number} b - Number 2
     * @return {number} Sum of a + b
     */
    var getSum = function(a, b) {
        while (b !== 0) {
            var carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }

        return a;
    };

    return {
        v1: function(a, b) {
            return getSum(a, b);
        }
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    // var answer = new Implementation();

})();

module.exports = Implementation;
