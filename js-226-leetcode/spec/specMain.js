/**
 * @author Jack Chang
 */

var Implementation = require('../code/main');
var answer = new Implementation();
var TreeNode = require('../code/treenode');

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("V1 Test Cases", function() {
    "use strict";

    function compareTree(t1, t2) {

        if ((t1 === null && t2 !== null) || (t1 !== null && t2 === null)) {
            return false;
        }
        if (t1 === null && t2 === null) {
            return true;
        }
        if (t1.val !== t2.val) {
            return false;
        }

        return compareTree(t1.left, t2.left) && compareTree(t1.right, t2.right);
    }

    it("Empty", function() {
        var input = null;
        var output = null;

        expect(answer.v1(input)).toEqual(output);
    });

    it("1", function() {
        var input = new TreeNode(1);
        answer.v1(input);
        var output = new TreeNode(1);

        var result = compareTree(input, output);

        expect(result).toEqual(true);
    });

    it("1-2,null to 1-null,2", function() {
        var input = new TreeNode(1);
        input.left = new TreeNode(2);

        answer.v1(input);

        var output = new TreeNode(1);
        output.right = new TreeNode(2);

        var result = compareTree(input, output);

        expect(result).toEqual(true);
    });

    //      4
    //    /   \
    //   2     7
    //  / \   / \
    // 1   3 6   9
    // to
    //      4
    //    /   \
    //   7     2
    //  / \   / \
    // 9   6 3   1
    it("Normal Test Case", function() {
        var input = new TreeNode(4);
        input.left = new TreeNode(2);
        input.left.left = new TreeNode(1);
        input.left.right = new TreeNode(3);

        input.right = new TreeNode(7);
        input.right.left = new TreeNode(6);
        input.right.right = new TreeNode(9);

        answer.v1(input);

        var output = new TreeNode(4);
        output.left = new TreeNode(7);
        output.left.left = new TreeNode(9);
        output.left.right = new TreeNode(6);

        output.right = new TreeNode(2);
        output.right.left = new TreeNode(3);
        output.right.right = new TreeNode(1);

        var result = compareTree(input, output);

        expect(result).toEqual(true);
    });

});
