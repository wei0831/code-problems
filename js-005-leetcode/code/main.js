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
     * Find Longest Plindrome Substring
     *
     * @function
     * @param {string} s - Input String
     * @return {string} Longest Plindrome Substring
     */
    var longestPalindrome = function(s) {
        var start = 0;
        var end = 0;

        for (var i = 0; i < s.length; ++i) {
            var single = _findPalindrome(s, i, i);
            var double = _findPalindrome(s, i, i + 1);
            var len = Math.max(single, double);
            if (len > end - start + 1) {
                start = i - Math.floor((len - 1) / 2);
                end = i + Math.floor(len / 2);
            }
        }
        return s.substring(start, end + 1);
    };

    /**
     * Helper Function: Expend to find palindrome length
     *
     * @function
     * @private
     * @param {string} s - Input String
     * @param {number} l - Index Left Side to expend
     * @param {number} r - Index Right Side to expend
     * @return {number} Length of the Palindrome
     */
    var _findPalindrome = function(s, l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            --l;
            ++r;
        }
        return r - l - 1;
    };

    return {
        v1: function(s) {
            return longestPalindrome(s);
        }
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    // var answer = new Implementation();
    // var test = "abac";
    // console.log(answer.v1(test));

})();

module.exports = Implementation;
