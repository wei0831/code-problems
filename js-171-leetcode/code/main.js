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
     * @param {string} s
     * @return {number}
     */
    var titleToNumber = function(s) {
        var result = 0;

        for (var i = 0; i < s.length; ++i) {
            result = result * 26 + s.toUpperCase().charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        }

        return result;
    };

    return {
        v1: titleToNumber
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     console.log(answer.v1("AA"));
//
// }());

module.exports = Implementation;
