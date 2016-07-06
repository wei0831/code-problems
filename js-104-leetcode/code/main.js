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

    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    /**
     * private Function
     *
     * @function
     * @param {TreeNode} root
     * @return {number}
     */
    var maxDepth = function(root) {

    };

    return {
        v1: function(root) {
            return maxDepth(root);
        },

        TreeNode: function(val){
          return TreeNode(val);
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
