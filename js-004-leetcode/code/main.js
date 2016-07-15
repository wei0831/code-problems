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
     * @param {number[]} ar1
     * @param {number} start1
     * @param {number[]} ar2
     * @param {number} start2
     * @param {number} k
     * @return {number}
     */
    var findKthSmallest = function(ar1, start1, ar2, start2, k) {
        var len1 = ar1.length - start1;
        var len2 = ar2.length - start2;

        if (len1 > len2) {
            return findKthSmallest(ar2, start2, ar1, start1, k);
        }

        if (len1 === 0) {
            return ar2[start2 + k - 1];
        }

        if (k === 1) {
            return Math.min(ar1[start1], ar2[start2]);
        }

        var mid1 = Math.min(len1, k >> 1);
        var mid2 = k - mid1;
        var num1 = ar1[start1 + mid1 - 1];
        var num2 = ar2[start2 + mid2 - 1];

        if (num1 < num2) {
            return findKthSmallest(ar1, start1 + mid1, ar2, start2, k - mid1);
        } else if (num1 > num2) {
            return findKthSmallest(ar1, start1, ar2, start2 + mid2, k - mid2);
        } else {
            return num1;
        }
    };

    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    var findMedianSortedArrays = function(nums1, nums2) {
        var lenTotal = nums1.length + nums2.length;
        if (lenTotal === 0) {
            return 0;
        }

        if (lenTotal & 0x1) {
            return findKthSmallest(nums1, 0, nums2, 0, Math.ceil(lenTotal / 2));
        } else {

            return (findKthSmallest(nums1, 0, nums2, 0, (lenTotal / 2)) +
                findKthSmallest(nums1, 0, nums2, 0, (lenTotal / 2 + 1))) / 2;
        }
    };

    return {
        result: findMedianSortedArrays
    };
}

// Main
// (function() {
//     "use strict";
//
//     // var answer = new Implementation();
//     // console.log(answer.result([1, 2], [3, 4, 5]));
//
// }());

module.exports = Implementation;
