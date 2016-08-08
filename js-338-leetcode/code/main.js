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
     *  Counting Bits
     *             0                   2^0 = 1
     *
     *             0
     *             1                   2^1 = 2
     *
     *             00
     *             01
     *            10 11                2^2 = 4
     *
     *             000
     *             001
     *           010 011
     *       100 101 110 111           2^3 = 8
     *
     * @function
     * @param {number} num
     * @return {number[]}
     */
    var countBits = function(num) {
        if (num === 0) {
            return [0];
        }
        if (num === 1) {
            return [0, 1];
        }

        var ans = [0, 1];
        var step = 1;

        for (var i = 2; i <= num; ++i) {
            if (i % step === 0) {
                step *= 2;
            }
            ans[i] = ans[i - step] + 1;
        }

        return ans;
    };

    return {
        v1: countBits
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
