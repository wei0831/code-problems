/**
 *
 * @author Jack Chang
 */
var ListNode = require('./listNode');

/**
 * Implementation class
 *
 * @class
 */
function Implementation() {
    "use strict";

    /**
     * Delete a node (except the tail) in a singly linked list,
     * Given only access to that node.
     *
     * @function
     * @param {ListNode} node
     */
    var deleteNode = function(node) {
        node.val = node.next.val;
        node.next = node.next.next;
    };

    return {
        v1: deleteNode
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     var test = new ListNode(1);
//     test.next = new ListNode(2);
//     test.next.next = new ListNode(3);
//     test.next.next.next = new ListNode(4);
//
//     answer.v1(test.next.next);
//
//     console.log(test);
//     console.log(test.next);
//     console.log(test.next.next);
//
// }());

module.exports = Implementation;
