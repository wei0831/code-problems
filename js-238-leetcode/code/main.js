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
     * productExceptSelf
     *
     *       [2,         3,       4,         5]
     * Left  [1          (1)*2,   (1*2)*3,   (1*2*3)*4]
     * Right [(1*5*4)*3  (1*5)*4  (1)*5      1 ]
     *
     * @function
     * @param {number[]} nums
     * @return {number[]}
     */
    var productExceptSelf = function(nums) {
        if (nums.length < 2) {
            return nums;
        }

        var left = [1];

        for (var i = 1; i < nums.length; ++i) {
            left[i] = left[i - 1] * nums[i - 1];
        }

        var right = 1;
        for (var j = nums.length - 1; j >= 0; --j) {
            left[j] *= right;
            right *= nums[j];
        }

        return left;
    };

    return {
        v1: productExceptSelf
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
