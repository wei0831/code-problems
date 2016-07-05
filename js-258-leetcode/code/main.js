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
     * Digital Root
     * Ref: https://www.wikiwand.com/en/Digital_root
     *
     * @function
     * @param {number} num
     * @return {number} 0-9
     */
    var addDigits = function(num) {
        return 1 + (num - 1) % 9;
    };

    return {
        v1: function(num) {
            return addDigits(num);
        }
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    // var answer = new Implementation();

})();

module.exports = Implementation;
