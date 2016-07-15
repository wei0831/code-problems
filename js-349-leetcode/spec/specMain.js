/**
 * @author Jack Chang
 */

var Implementation = require('../code/main');
var answer = new Implementation();

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("V1 Test Cases", function() {
    "use strict";

    it("Input [], [] = []", function() {
        var input1 = [];
        var input2 = [];
        var output = [];

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input [1,2,3], [] = []", function() {
        var input1 = [1, 2, 3];
        var input2 = [];
        var output = [];

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input [1], [2] = []", function() {
        var input1 = [1];
        var input2 = [2];
        var output = [];

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input [1,1,1], [1] = [1]", function() {
        var input1 = [1, 1, 1];
        var input2 = [1];
        var output = [1];

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input [1,2,3], [4] = []", function() {
        var input1 = [1, 2, 3];
        var input2 = [4];
        var output = [];

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input [1,2,3], [2,2] = [2]", function() {
        var input1 = [1, 2, 3];
        var input2 = [2, 2];
        var output = [2];

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input [4,4], [4,4] = [4]", function() {
        var input1 = [4, 4];
        var input2 = [4, 4];
        var output = [4];

        expect(answer.v1(input1, input2)).toEqual(output);
    });
});
