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

    it("Input '', '' = true", function() {
        var input1 = "";
        var input2 = "";
        var output = true;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input 'a', '' = false", function() {
        var input1 = "a";
        var input2 = "";
        var output = false;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input 'a', 'a' = true", function() {
        var input1 = "a";
        var input2 = "a";
        var output = true;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input 'ba', 'ab' = true", function() {
        var input1 = "ba";
        var input2 = "ab";
        var output = true;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input 'add', 'dad' = true", function() {
        var input1 = "add";
        var input2 = "dad";
        var output = true;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input 'anagram', 'nagaram' = true", function() {
        var input1 = "anagram";
        var input2 = "nagaram";
        var output = true;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input 'rat', 'cat' = false", function() {
        var input1 = "rat";
        var input2 = "cat";
        var output = false;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input 'a*999999', 'a*999999' = true", function() {
        var input1 = "";
        var input2 = "";
        for (var i = 0; i < 999999; ++i) {
            input1 += "a";
            input2 += "a";
        }
        var output = true;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

    it("Input 'b*999999', 'a*999999' = false", function() {
        var input1 = "";
        var input2 = "";
        for (var i = 0; i < 999999; ++i) {
            input1 += "b";
            input2 += "a";
        }
        var output = false;

        expect(answer.v1(input1, input2)).toEqual(output);
    });

});
