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

    it("Input [0, 1, 0, 3, 12] = [1, 3, 12, 0, 0]", function() {
        var input = [0, 1, 0, 3, 12];
        var output = [1, 3, 12, 0, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [0] = [0]", function() {
        var input = [0];
        var output = [0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [0, 0] = [0, 0]", function() {
        var input = [0, 0];
        var output = [0, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [0, 1] = [1, 0]", function() {
        var input = [0, 1];
        var output = [1, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [0, 0, 1] = [1, 0, 0]", function() {
        var input = [0, 0, 1];
        var output = [1, 0, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [0, 1, 0] = [1, 0, 0]", function() {
        var input = [0, 1, 0];
        var output = [1, 0, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [1, 0] = [1, 0]", function() {
        var input = [1, 0];
        var output = [1, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [1, 0, 0] = [1, 0, 0]", function() {
        var input = [1, 0, 0];
        var output = [1, 0, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [1, 2, 0] = [1, 2, 0]", function() {
        var input = [1, 2, 0];
        var output = [1, 2, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

    it("Input [0, 2, 1] = [2, 1, 0]", function() {
        var input = [0, 2, 1];
        var output = [2, 1, 0];
        answer.v1(input);

        expect(input).toEqual(output);
    });

});
