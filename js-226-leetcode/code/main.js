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
     * Invert BinaryTree
     *
     * @function
     * @param {object} root TreeNode
     * @return {object|null} Root
     */
    var invertTree = function(root) {
        if (root === null) {
            return null;
        }

        var temp = root.right;
        root.right = root.left;
        root.left = temp;

        invertTree(root.right);
        invertTree(root.left);

        return root;
    };

    return {
        v1: function(root) {
            return invertTree(root);
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
