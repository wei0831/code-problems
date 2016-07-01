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
     * @param {string} s - String To Reverse
     * @return {string} Reversed String
     */
    var reverseString = function(s) {
        var result = "";
        for (var i = s.length - 1; i >= 0; --i) {
            result += s[i];
        }
        return result;
    };

    return {
        v1: function(s) {
            return reverseString(s);
        }
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    // var answer = new Implementation();
    // var test = "abcd";
    // console.log(answer.v1(test));

})();

module.exports = Implementation;
