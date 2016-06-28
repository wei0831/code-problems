/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */
var Implementation = require('../code/main');
var answer = new Implementation();

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("Positive Inputs Only", function() {
    "use strict";

    it("[] Target 0 = []", function() {
        var input = [];
        var target = 0;
        var output = [];

        expect(answer.result(input, target)).toEqual(output);
    });

    it("[0, 1, 2, 0] Target 0 = [0, 3]", function() {
        var input = [0, 1, 2, 0];
        var target = 0;
        var output = [0, 3];

        expect(answer.result(input, target)).toEqual(output);
    });

    it("[0, 1, 2, 3] Target 1 = [0, 1]", function() {
        var input = [0, 1, 2, 3];
        var target = 1;
        var output = [0, 1];

        expect(answer.result(input, target)).toEqual(output);
    });

    it("[1, 2, 3] Target 0 = []", function() {
        var input = [1, 2, 3];
        var target = 0;
        var output = [];

        expect(answer.result(input, target)).toEqual(output);
    });

    it("[1, 2, 3] Target 4 = [0, 2]", function() {
        var input = [1, 2, 3];
        var target = 4;
        var output = [0, 2];

        expect(answer.result(input, target)).toEqual(output);
    });

    it("[1, 2, 3, 4] Target 3 = [0, 1]", function() {
        var input = [1, 2, 3, 4];
        var target = 3;
        var output = [0, 1];

        expect(answer.result(input, target)).toEqual(output);
    });

    it("[2, 2, 2, 2] Target 4 = [0, 1]", function() {
        var input = [2, 2, 2, 2];
        var target = 4;
        var output = [0, 1];

        expect(answer.result(input, target)).toEqual(output);
    });

});

describe("Including Negative Inputs", function() {
    "use strict";

    it("[-1, 2, 1, 0] Target 1 = [0, 1]", function() {
        var input = [-1, 2, 1, 0];
        var target = 1;
        var output = [0, 1];

        expect(answer.result(input, target)).toEqual(output);
    });

    it("[-1, -1, 1, -3] Target -2 = [0, 1]", function() {
        var input = [-1, -1, 1, -3];
        var target = -2;
        var output = [0, 1];

        expect(answer.result(input, target)).toEqual(output);
    });

});
