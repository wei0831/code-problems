/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */

// Implemention
function Implemention() {
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
    module.exports = Implemention;
}

// Main
(function() {
    "use strict";

    var answer = new Implemention();
    console.log("This is main : ", answer.result());
})();
