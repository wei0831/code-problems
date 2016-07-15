/**
 * @author Jack Chang
 */

var Implementation = require('../code/main');
var TreeNode = require('../code/treenode');

var answer = new Implementation();

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("V1 Test Cases", function() {
    "use strict";

    it("Expect True 0", function() {
        var input1 = new TreeNode(1);

        var input2 = new TreeNode(1);

        expect(answer.v1(input1, input2)).toBe(true);
    });

    it("Expect True 1", function() {
        var input1 = new TreeNode(1);
        input1.right = new TreeNode(2);

        var input2 = new TreeNode(1);
        input2.right = new TreeNode(2);

        expect(answer.v1(input1, input2)).toBe(true);
    });

    it("Expect True 2", function() {
        var input1 = new TreeNode(1);
        input1.right = new TreeNode(2);
        input1.left = new TreeNode(3);

        var input2 = new TreeNode(1);
        input2.right = new TreeNode(2);
        input2.left = new TreeNode(3);

        expect(answer.v1(input1, input2)).toBe(true);
    });

    it("Expect True 3", function() {
        var input1 = new TreeNode(1);
        input1.right = new TreeNode(3);
        input1.left = new TreeNode(2);

        var input2 = new TreeNode(1);
        input2.right = new TreeNode(3);
        input2.left = new TreeNode(2);

        expect(answer.v1(input1, input2)).toBe(true);
    });

    it("Expect True 3", function() {
        var input1 = null;

        var input2 = null;

        expect(answer.v1(input1, input2)).toBe(true);
    });

    it("Expect False 0", function() {
        var input1 = new TreeNode(1);

        var input2 = new TreeNode(1);
        input2.right = new TreeNode(3);

        expect(answer.v1(input1, input2)).toBe(false);
    });

    it("Expect False 1", function() {
        var input1 = new TreeNode(1);
        input1.right = new TreeNode(2);
        input1.left = new TreeNode(3);

        var input2 = new TreeNode(1);
        input2.right = new TreeNode(3);
        input2.left = new TreeNode(2);

        expect(answer.v1(input1, input2)).toBe(false);
    });

    it("Expect False 2", function() {
        var input1 = new TreeNode(1);
        input1.right = new TreeNode(2);
        input1.left = new TreeNode(3);

        var input2 = null;

        expect(answer.v1(input1, input2)).toBe(false);
    });

    it("Expect False 3", function() {
        var input1 = new TreeNode(1);
        input1.right = new TreeNode(2);
        input1.left = new TreeNode(3);

        var input2 = new TreeNode(1);
        input2.right = new TreeNode(2);

        expect(answer.v1(input1, input2)).toBe(false);
    });

});
