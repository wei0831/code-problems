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
     * @param {number} n - a positive integer
     * @return {number}
     */
    var hammingWeight = function(n) {
        var result = 0;
        while(n !== 0){
          ++result;
          n &= n -1;
        }
        return result;
    };

    return {
        v1: hammingWeight
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     console.log(answer.v1(2147483648));
// }());

module.exports = Implementation;
