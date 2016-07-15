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
     * Compare Tree
     *
     * @function
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    var isSameTree = function(p, q) {
        if (p === null && q === null) {
            return true;
        }

        if (p === null || q === null) {
            return false;
        }

        return p.val === q.val && isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
    };

    return {
        v1: isSameTree
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     // var answer = new Implementation();
//
// }());

module.exports = Implementation;
