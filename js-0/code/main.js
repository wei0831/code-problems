/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */

// Implemention
function implemention(){
    var private_function = function() {
        return true;
    };

    return {
        result: function() {
            return private_function();
        }
    }
};
// Export Functions
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = implemention;
}

// Main
(function() {
    "use strict";

    var answer = new implemention();
    console.log("This is main : ", answer.result());
})();
