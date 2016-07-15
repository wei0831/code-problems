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
     * Given n number of stones, Will I win the Nim Game if I go first?
     *
     * @function
     * @param {number} n
     * @return {boolean}
     */
    var canWinNim = function(n) {
        return (n <= 0) ? true : n % 4 !== 0;
    };

    return {
        v1: canWinNim
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     // var answer = new Implementation();
//
// }());

module.exports = Implementation;
