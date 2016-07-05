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

    it("Input 1 = true", function() {
        var input = 1;
        var output = true;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 2 = true", function() {
        var input = 2;
        var output = true;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 3 = true", function() {
        var input = 3;
        var output = true;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 4 = false", function() {
        var input = 4;
        var output = false;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 5 = true", function() {
        var input = 5;
        var output = true;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 8 = false", function() {
        var input = 8;
        var output = false;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 0 = true [I go first, so automatically win]", function() {
        var input = 0;
        var output = true;

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input -1 = true [I go first, so automatically win]", function() {
        var input = -1;
        var output = true;

        expect(answer.v1(input)).toEqual(output);
    });

});
