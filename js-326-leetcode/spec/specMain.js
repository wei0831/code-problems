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

describe("v2 Test Cases", function() {
    "use strict";

    it("Input 0 = false", function() {
        var input = 0;
        var output = false;
        expect(answer.v2(input)).toEqual(output);
    });

    it("Input 1 = true", function() {
        var input = 1;
        var output = true;
        expect(answer.v2(input)).toEqual(output);
    });

    it("Input 2 = false", function() {
        var input = 2;
        var output = false;
        expect(answer.v2(input)).toEqual(output);
    });

    it("Input 3 = true", function() {
        var input = 3;
        var output = true;
        expect(answer.v2(input)).toEqual(output);
    });

    it("Input 9 = true", function() {
        var input = 9;
        var output = true;
        expect(answer.v2(input)).toEqual(output);
    });
});

describe("V2 Test Cases", function() {
    "use strict";

    it("Input 0 = false", function() {
        var input = 0;
        var output = false;
        expect(answer.v2(input)).toEqual(output);
    });

    it("Input 1 = true", function() {
        var input = 1;
        var output = true;
        expect(answer.v2(input)).toEqual(output);
    });

    it("Input 2 = false", function() {
        var input = 2;
        var output = false;
        expect(answer.v2(input)).toEqual(output);
    });

    it("Input 3 = true", function() {
        var input = 3;
        var output = true;
        expect(answer.v2(input)).toEqual(output);
    });

    it("Input 9 = true", function() {
        var input = 9;
        var output = true;
        expect(answer.v2(input)).toEqual(output);
    });
});
