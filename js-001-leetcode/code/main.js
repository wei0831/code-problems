/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */

// Implementation
function Implementation() {
    "use strict";

    var twoSum = function(nums, target) {
        if (nums.length > 0) {
            var hash = {};
            var index = 0;

            while (index < nums.length) {
                var dif = target - nums[index];
                if (hash[dif] !== undefined) {
                    return [hash[dif], index];
                } else {
                    hash[nums[index]] = index;
                }
                ++index;
            }
        }

        return [];
    };

    return {
        result: function(nums, target) {
            return twoSum(nums, target);
        }
    };
}

// Export Functions
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = Implementation;
}

// // Main
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     console.log("Result : ", answer.result([1, 2, 3], 0));
// })();
