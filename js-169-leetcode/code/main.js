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
     * Assume that the array is non-empty and
     *   the majority element always exist in the array.
     * https://www.wikiwand.com/en/Boyer%E2%80%93Moore_majority_vote_algorithm
     *
     * @function
     */
    var majorityElement = function(nums) {
        var mj = nums[0];
        var count = 0;

        for (var i = 1; i < nums.length; ++i) {
            if (mj === nums[i]) {
                ++count;
            } else if (count) {
                --count;
            } else {
                mj = nums[i];
            }
        }

        return mj;
    };

    return {
        v1: majorityElement
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    var answer = new Implementation();
    console.log(answer.v1([1, 2, 3, 4, 5, 7, 7]));

}());

module.exports = Implementation;
