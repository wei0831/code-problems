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
     * Given an array of integers, every element appears three times except for one. Find that single one.
     *
     * @function
     * @param {number[]} nums
     * @return {number}
     */
    var singleNumber = function(nums) {
        var intSize = 32;
        var result = 0;

        for (var i = 0; i < intSize; ++i) {
            var sum = 0;
            var x = (1 << i);

            for (var j = 0; j < nums.length; ++j) {
                if (nums[j] & x) {
                    ++sum;
                }
            }

            if (sum % 3) {
                result |= x;
            }
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
