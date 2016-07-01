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

describe("V1 Test", function() {
    "use strict";

    it("Input [1, 2] = 3", function() {
        var input = [1, 2];
        var output = 3;

        expect(answer.v1(input[0], input[1])).toEqual(output);
    });

    it("Input [0, 0] = 0", function() {
        var input = [0, 0];
        var output = 0;

        expect(answer.v1(input[0], input[1])).toEqual(output);
    });

    it("Input [1, 0] = 1", function() {
        var input = [1, 0];
        var output = 1;

        expect(answer.v1(input[0], input[1])).toEqual(output);
    });

    it("Input [0, 1] = 1", function() {
        var input = [0, 1];
        var output = 1;

        expect(answer.v1(input[0], input[1])).toEqual(output);
    });

    it("Input [INT32_MAX, 1] = INT32_MIN", function() {
        var input = [Math.pow(2, 31) - 1, 1];
        var output = -Math.pow(2, 31);

        expect(answer.v1(input[0], input[1])).toEqual(output);
    });

    it("Input [-1, 1] = 0", function() {
        var input = [-1, 1];
        var output = 0;

        expect(answer.v1(input[0], input[1])).toEqual(output);
    });

    it("Input [-1, -1] = -2", function() {
        var input = [-1, -1];
        var output = -2;

        expect(answer.v1(input[0], input[1])).toEqual(output);
    });

    it("Input [INT32_MIN, -1] = INT32_MAX", function() {
        var input = [-Math.pow(2, 31), -1];
        var output = Math.pow(2, 31) - 1;

        expect(answer.v1(input[0], input[1])).toEqual(output);
    });

});
