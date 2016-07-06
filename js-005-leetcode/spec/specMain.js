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

    it("Empty String = Empty", function() {
        var input = "";
        var output = "";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'a' = 'a'", function() {
        var input = "a";
        var output = "a";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'aba' = 'aba'", function() {
        var input = "aba";
        var output = "aba";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'abc' = 'a'", function() {
        var input = "abc";
        var output = "a";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'abcdefgf' = 'fgf'", function() {
        var input = "abcdefgf";
        var output = "fgf";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'cc' = 'cc'", function() {
        var input = "cc";
        var output = "cc";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'ccc' = 'ccc'", function() {
        var input = "ccc";
        var output = "ccc";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'cccc' = 'cccc'", function() {
        var input = "cccc";
        var output = "cccc";

        expect(answer.v1(input)).toEqual(output);
    });
});
