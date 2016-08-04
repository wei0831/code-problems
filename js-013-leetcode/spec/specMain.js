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

    it("Input I = 1", function() {
        var input = "I";
        var output = 1;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input II = 2", function() {
        var input = "II";
        var output = 2;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input V = 5", function() {
        var input = "V";
        var output = 5;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input IV = 4", function() {
        var input = "IV";
        var output = 4;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input VI = 6", function() {
        var input = "VI";
        var output = 6;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input X = 10", function() {
        var input = "X";
        var output = 10;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input L = 50", function() {
        var input = "L";
        var output = 50;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input C = 100", function() {
        var input = "C";
        var output = 100;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input D = 500", function() {
        var input = "D";
        var output = 500;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input M = 1000", function() {
        var input = "M";
        var output = 1000;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input IM = 999", function() {
        var input = "IM";
        var output = 999;
        expect(answer.v1(input)).toEqual(output);
    });
    
});
