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
     */
    var private_function = function() {

        return true;
    };

    return {
        v1: function() {
            return private_function();
        }
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    // var answer = new Implementation();
    // console.log("This is main : ", answer.result());

})();

module.exports = Implementation;
