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
     * @return {boolean}
     */
    var containsDuplicate = function(nums) {
        var table = {};
        for (var i = 0; i < nums.length; ++i) {
            if (table[nums[i]]) {
                return true;
            } else {
                table[nums[i]] = 1;
            }
        }
        return false;
    };

    return {
        v1: containsDuplicate
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     console.log(answer.v1([1,2,3,3]));
//
// }());

module.exports = Implementation;
