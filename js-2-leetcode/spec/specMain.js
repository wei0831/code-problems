/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */
var Implemention = require('../code/main');
var ListNode = require("../code/linkedlist");
var answer = new Implemention();

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("Inputs with Same Length", function() {
    "use strict";

    it("[]+[] = []", function() {
        var input1 = null;
        var input2 = null;

        expect(answer.result(input1, input2)).toEqual(null);
    });

    it("[1]+[1] = [2]", function() {
        var input1 = new ListNode(1);
        var input2 = new ListNode(1);

        var output = [2];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

    it("[1,2,3]+[1,2,3] = [2,4,6]", function() {
        var input1 = new ListNode(1);
        input1.next = new ListNode(2);
        input1.next.next = new ListNode(3);
        var input2 = new ListNode(1);
        input2.next = new ListNode(2);
        input2.next.next = new ListNode(3);

        var output = [2, 4, 6];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

    it("[1,8,3]+[1,2,3] = [2,0,7]", function() {
        var input1 = new ListNode(1);
        input1.next = new ListNode(8);
        input1.next.next = new ListNode(3);
        var input2 = new ListNode(1);
        input2.next = new ListNode(2);
        input2.next.next = new ListNode(3);

        var output = [2, 0, 7];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

    it("[9,2,3]+[1,2,3] = [0,5,6]", function() {
        var input1 = new ListNode(9);
        input1.next = new ListNode(2);
        input1.next.next = new ListNode(3);
        var input2 = new ListNode(1);
        input2.next = new ListNode(2);
        input2.next.next = new ListNode(3);

        var output = [0, 5, 6];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

    it("[1,2,7]+[1,2,3] = [2,4,0,1]", function() {
        var input1 = new ListNode(1);
        input1.next = new ListNode(2);
        input1.next.next = new ListNode(7);
        var input2 = new ListNode(1);
        input2.next = new ListNode(2);
        input2.next.next = new ListNode(3);

        var output = [2, 4, 0, 1];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

});

describe("Inputs with Different Length", function() {
    "use strict";

    it("[1,2,3]+[] = [1,2,3]", function() {
        var input1 = new ListNode(1);
        input1.next = new ListNode(2);
        input1.next.next = new ListNode(3);
        var input2 = null;

        var output = [1, 2, 3];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

    it("[]+[1,2,3] = [1,2,3]", function() {
        var input1 = null;

        var input2 = new ListNode(1);
        input2.next = new ListNode(2);
        input2.next.next = new ListNode(3);

        var output = [1, 2, 3];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

    it("[2]+[1,9,9] = [3,9,9]", function() {
        var input1 = new ListNode(2);

        var input2 = new ListNode(1);
        input2.next = new ListNode(9);
        input2.next.next = new ListNode(9);

        var output = [3, 9, 9];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

    it("[1]+[9,9,9] = [0,0,0,1]", function() {
        var input1 = new ListNode(1);

        var input2 = new ListNode(9);
        input2.next = new ListNode(9);
        input2.next.next = new ListNode(9);

        var output = [0, 0, 0, 1];

        expect(answer.result(input1, input2).toArray()).toEqual(output);
    });

});
