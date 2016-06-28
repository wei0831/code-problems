/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */

// Implementation
function Implementation() {
    "use strict";

    var private_function = function() {

        return true;
    };

    return {
        result: function() {
            return private_function();
        }
    };
}

// Export Functions
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = Implementation;
}

// Main
(function() {
    "use strict";

    // var answer = new Implementation();
    // console.log("This is main : ", answer.result());

})();
