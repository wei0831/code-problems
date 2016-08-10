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
     * max Profit
     *
     * @function
     * @param {number[]} prices
     * @return {number}
     */
    var maxProfit = function(prices) {
        var max = 0;

        for (var i = 1; i < prices.length; ++i) {
            if (prices[i] > prices[i - 1]) {
                max += (prices[i] - prices[i - 1]);
            }
        }

        return max;
    };

    return {
        v1: maxProfit
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
