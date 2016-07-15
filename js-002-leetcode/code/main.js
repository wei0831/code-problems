/**
 *
 * @author Jack Chang
 */

var ListNode = require("./linkedlist");

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
     */
    var addTwoNumbers = function(l1, l2) {
        var result = new ListNode(null);
        var carry = 0;
        var c = result;

        while (l1 !== null || l2 !== null) {
            var num = carry;
            if (l1) {
                num += l1.val;
                l1 = l1.next;
            }
            if (l2) {
                num += l2.val;
                l2 = l2.next;
            }

            if (num >= 10) {
                num -= 10;
                carry = 1;
            } else {
                carry = 0;
            }
            c.next = new ListNode(num);
            c = c.next;
        }

        if (carry) {
            c.next = new ListNode(1);
        }

        return result.next;
    };

    return {
        result: addTwoNumbers
    };
}

// Main
// (function() {
//     "use strict";
//
//     // var answer = new Implementation();
//     // console.log("This is main : ", answer.result());
// }());

module.exports = Implementation;
