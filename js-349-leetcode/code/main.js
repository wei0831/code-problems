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
     * intersection of integer array
     *
     * @function
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersection = function(nums1, nums2) {
        var hash = {};
        var result = [];

        for (var i = 0; i < nums1.length; ++i) {
            hash[nums1[i]] = 1;
        }

        for (var j = 0; j < nums2.length; ++j) {
            if (hash[nums2[j]] !== undefined) {
                ++hash[nums2[j]];
                if (hash[nums2[j]] === 2) {
                    result.push(nums2[j]);
                }
            }
        }

        return result;
    };

    return {
        v1: intersection
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     console.log(answer.v1([1,2,2,1], [2,2]));
//
// }());

module.exports = Implementation;
