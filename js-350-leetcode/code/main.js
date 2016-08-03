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
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersect = function(nums1, nums2) {
        var table = {};
        var result = [];
        for (var i in nums1) {
            if (table[nums1[i]]) {
                ++table[nums1[i]];
            } else {
                table[nums1[i]] = 1;
            }
        }
        for (var j in nums2) {
            if (table[nums2[j]] && table[nums2[j]] > 0) {
                --table[nums2[j]];
                result.push(nums2[j]);
            }
        }
        return result;
    };

    /**
     * private Function
     *
     * @function
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersect_sorted = function(nums1, nums2) {
        nums1.sort();
        nums2.sort();

        var i = 0;
        var j = 0;
        var result = [];

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                ++i;
                ++j;
            } else if (nums1[i] < nums2[j]) {
                ++i;
            } else if (nums1[i] > nums2[j]) {
                ++j;
            }
        }

        return result;
    };

    return {
        v1: intersect,
        v2: intersect_sorted
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    var answer = new Implementation();
    console.log(answer.v1([1, 2, 2, 3], [2, 2]));
    console.log(answer.v2([1, 2, 2, 3], [2, 2]));

}());

module.exports = Implementation;
