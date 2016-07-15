/**
 * @author Jack Chang
 */

var Implementation = require('../code/main');
var ListNode = require('../code/listNode');

var answer = new Implementation();

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("V1 Test Cases", function() {
    "use strict";

    it("Input 1->2, 1 = 2", function() {
        var input = new ListNode(1);
        input.next = new ListNode(2);

        answer.v1(input);

        expect(input.val).toBe(2);
        expect(input.next).toBe(null);
    });

    it("Input 1->2->3->4, 1 = 2->3->4", function() {
        var input = new ListNode(1);
        input.next = new ListNode(2);
        input.next.next = new ListNode(3);
        input.next.next.next = new ListNode(4);

        answer.v1(input);

        expect(input.val).toBe(2);
        expect(input.next.val).toBe(3);
        expect(input.next.next.val).toBe(4);
        expect(input.next.next.next).toBe(null);
    });

    it("Input 1->2->3->4, 2 = 1->3->4", function() {
        var input = new ListNode(1);
        input.next = new ListNode(2);
        input.next.next = new ListNode(3);
        input.next.next.next = new ListNode(4);

        answer.v1(input.next);

        expect(input.val).toBe(1);
        expect(input.next.val).toBe(3);
        expect(input.next.next.val).toBe(4);
        expect(input.next.next.next).toBe(null);
    });

    it("Input 1->2->3->4, 3 = 1->2->4", function() {
        var input = new ListNode(1);
        input.next = new ListNode(2);
        input.next.next = new ListNode(3);
        input.next.next.next = new ListNode(4);

        answer.v1(input.next.next);

        expect(input.val).toBe(1);
        expect(input.next.val).toBe(2);
        expect(input.next.next.val).toBe(4);
        expect(input.next.next.next).toBe(null);
    });

});
