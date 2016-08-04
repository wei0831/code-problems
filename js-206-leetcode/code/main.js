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
     * reverseList iterative
     *
     * @function
     * @param {ListNode} head
     * @return {ListNode}
     */
    var reverseList = function(head) {
        var prev = null;
        while(head){
          var next = head.next;
          head.next = prev;
          prev = head;
          head = next;
        }
        return prev;
    };

    /**
     * reverseList recursive
     *
     * @function
     * @param {ListNode} head
     * @return {ListNode}
     */
    var reverseList_recursive = function(head) {
        if(!head || !head.next){
          return head;
        }
        var newhead = reverseList_recursive(head.next);
        head.next.next = head;
        head.next = null;
        return newhead;
    };

    return {
        v1: reverseList,
        v2: reverseList_recursive
    };
}

/**
 * Main
 */
// (function() {
//     "use strict";
//
//     var answer = new Implementation();
//     var head = new ListNode(1);
//     head.next = new ListNode(2);
//     head.next.next = new ListNode(3);
//     head.next.next.next = new ListNode(4);
//
//     console.log(head, head.next, head.next.next, head.next.next.next);
//
//     head = answer.v1(head);
//
//     console.log(head, head.next, head.next.next, head.next.next.next);
// }());

module.exports = Implementation;
