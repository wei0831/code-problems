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
    var isHappy = function(n) {
        var hash = {};

        while (true) {
            if (n === 1) {
                return true;
            }
            var result = 0;
            while (n > 0) {
                var t = n % 10;
                result += t * t;
                n = Math.floor(n / 10);
            }
            if (hash[result]) {
                return false;
            } else {
                hash[result] = 1;
                n = result;
            }
        }
    };

    return {
        v1: isHappy
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
