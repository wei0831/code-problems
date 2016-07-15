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
     * Move Zeros
     *   Remember where the first non zero is.
     *   When encouter zero, swap with first non zero.
     *
     * @function
     */
    var moveZeroes = function(nums) {
        var i = 0;
        var non_zero = 0;

        while (i < nums.length && non_zero < nums.length) {
            if (nums[i] === 0) {
                while (++non_zero < nums.length) {
                    if (non_zero > i && nums[non_zero] !== 0) {
                        nums[i] = nums[non_zero];
                        nums[non_zero] = 0;
                        break;
                    }
                }
            }
            ++i;
        }
    };

    return {
        v1: function(nums) {
            return moveZeroes(nums);
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
