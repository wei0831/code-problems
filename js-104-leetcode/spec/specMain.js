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

    it("Empty Tree", function() {
        var input = null;
        var output = 0;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Root 1 = Depth 1", function() {
        var input = new TreeNode(1);
        var output = 1;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Root 1-1,null = Depth 2", function() {
        var input = new TreeNode(1);

        input.left = new TreeNode(2);

        var output = 2;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Root 1-2-3-4-5 = Depth 5", function() {
        var input = new TreeNode(1);

        input.left = new TreeNode(2);
        input.left.left = new TreeNode(3);
        input.left.left.left = new TreeNode(4);
        input.left.left.left.left = new TreeNode(5);

        var output = 5;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Root right left same depth = Depth 3", function() {
        var input = new TreeNode(1);

        input.left = new TreeNode(2);
        input.left.left = new TreeNode(3);

        input.right = new TreeNode(2);
        input.right.right = new TreeNode(3);

        var output = 3;

        expect(answer.v1(input)).toEqual(output);
    });

});
