/**
 *
 * @author Jack Chang
 */
var TreeNode = require('./treenode');

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
     * @param {TreeNode} root
     * @return {number}
     */
    var maxDepth = function(root) {
        if (root === null) {
            return 0;
        }

        var left = maxDepth(root.left);
        var right = maxDepth(root.right);

        return Math.max(left, right) + 1;
    };

    return {
        v1: function(root) {
            return maxDepth(root);
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
