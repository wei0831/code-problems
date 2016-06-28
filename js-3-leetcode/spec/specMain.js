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

describe("Valid Input Test Cases", function() {
    "use strict";

    it("Input [] = 0", function() {
        var input = "";
        var output = 0;

        expect(answer.result(input)).toEqual(output);
    });

    it("Input [a] = 1", function() {
        var input = "a";
        var output = 1;

        expect(answer.result(input)).toEqual(output);
    });

    it("Input [aa] = 1", function() {
        var input = "aa";
        var output = 1;

        expect(answer.result(input)).toEqual(output);
    });

    it("Input [ab] = 2", function() {
        var input = "ab";
        var output = 2;

        expect(answer.result(input)).toEqual(output);
    });

    it("Input [abc] = 3", function() {
        var input = "abc";
        var output = 3;

        expect(answer.result(input)).toEqual(output);
    });

    it("Input [ababc] = 3", function() {
        var input = "ababc";
        var output = 3;

        expect(answer.result(input)).toEqual(output);
    });

    it("Input [abbac] = 3", function() {
        var input = "abbac";
        var output = 3;

        expect(answer.result(input)).toEqual(output);
    });

    it("Input [aaaaa] = 1", function() {
        var input = "aaaaa";
        var output = 1;

        expect(answer.result(input)).toEqual(output);
    });

    it("Input [abcdefg] = 7", function() {
        var input = "abcdefg";
        var output = 7;

        expect(answer.result(input)).toEqual(output);
    });

});
