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
     *
     * @function
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    var isAnagram = function(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        var table = new Int32Array(24);
        for (var i = 0; i < s.length; ++i) {
            ++table[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
        }

        for (var j = 0; j < t.length; ++j) {
            if (--table[t[j].charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
                return false;
            }
        }

        return true;
    };

    return {
        v1: isAnagram
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     console.log(answer.v1("cat", "rat"));
//
// }());

module.exports = Implementation;
