/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */

// Implementation
function Implementation() {
    "use strict";

    var lengthOfLongestSubstring_v1 = function(s) {
        var letters = {};
        var idx_lastend = -1;
        var len_longest = 0;
        var len_cur = 0;

        for (var i = 0; i < s.length; ++i) {
            if (letters[s[i]] === undefined) {
                ++len_cur;
            } else {
                idx_lastend = Math.max(idx_lastend, letters[s[i]]);
                len_longest = Math.max(len_cur, len_longest);
                len_cur = i - idx_lastend;
            }
            letters[s[i]] = i;
        }
        return Math.max(len_cur, len_longest);
    };

    var lengthOfLongestSubstring_v2 = function(s) {
        var len = s.length;
        var set = {};
        var ans = 0;
        var i = 0;
        var j = 0;

        while (i < len && j < len) {
            if (set[s[j]] === undefined) {
                set[s[j++]] = true;
                ans = Math.max(ans, j - i);
            } else {
                set[s[i++]] = undefined;
            }
        }
        return ans;
    };

    return {
        v1: lengthOfLongestSubstring_v1,
        v2: lengthOfLongestSubstring_v2
    };
}

// Main
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     var now = require("performance-now");
//     var randomstring = require("randomstring");
//     var i;
//     var start;
//     var end;
//
//     console.log("==== Fixed String ====");
//
//     start = now();
//     for (i = 0; i < 10000; ++i) {
//         answer.v1("ababababababcdefabc");
//     }
//     end = now();
//
//     console.log("V1 took " + ((end - start).toFixed(3)) + " milliseconds.");
//
//     start = now();
//     for (i = 0; i < 10000; ++i) {
//         answer.v2("ababababababcdefabc");
//     }
//     end = now();
//
//     console.log("V2 took " + ((end - start).toFixed(3)) + " milliseconds.");
//
//     console.log("==== Random same length String ====");
//
//     start = now();
//     for (i = 0; i < 10000; ++i) {
//         answer.v1(randomstring.generate(10));
//     }
//     end = now();
//
//     console.log("V1 took " + ((end - start).toFixed(3)) + " milliseconds.");
//
//     start = now();
//     for (i = 0; i < 10000; ++i) {
//         answer.v2(randomstring.generate(10));
//     }
//     end = now();
//
//     console.log("V2 took " + ((end - start).toFixed(3)) + " milliseconds.");
//
// }());

module.exports = Implementation;
