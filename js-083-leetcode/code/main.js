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
     * delete Duplicates
     *
     * @function
     * @param {ListNode} head
     * @return {ListNode}
     */
    var deleteDuplicates = function(head) {
        var cur = head;
        while (cur && cur.next) {
            if (cur.val === cur.next.val) {
                cur.next = cur.next.next;
            } else {
                cur = cur.next;
            }
        }
        return head;
    };

    return {
        v1: deleteDuplicates
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     console.log(answer.v1());
// }());

module.exports = Implementation;
