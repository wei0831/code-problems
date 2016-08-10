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
     * topKFrequent
     *
     * @function
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    var topKFrequent = function(nums, k) {
        var hash = {};

        for (var i = 0; i < nums.length; ++i) {
            if (hash[nums[i]]) {
                ++hash[nums[i]];
            } else {
                hash[nums[i]] = 1;
            }
        }
        var result = Object.keys(hash).sort(
            function(a, b) {
                return hash[b] - hash[a];
            });

        // Only need top K
        result.length = k;

        // convert string to interger
        for (var j = 0; j < result.length; ++j) {
            result[j] = +result[j];
        }

        return result;
    };

    return {
        v1: topKFrequent
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    var answer = new Implementation();
    console.log(answer.v1([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0], 6));
}());

module.exports = Implementation;
