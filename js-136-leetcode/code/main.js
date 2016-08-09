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
     * @param {number[]} nums
     * @return {number}
     */
    var singleNumber = function(nums) {
        var result = 0;
        for (var i = 0; i < nums.length; ++i) {
            result ^= nums[i];
        }
        return result;
    };

    return {
        v1: singleNumber
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
