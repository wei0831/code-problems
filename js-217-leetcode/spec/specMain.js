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

    it("Input [] = false", function() {
        var input = [];
        var output = false;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input [1] = false", function() {
        var input = [1];
        var output = false;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input [1,2] = false", function() {
        var input = [1,2];
        var output = false;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input [1,2,3,3] = true", function() {
        var input = [1,2,3,3];
        var output = true;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input [1,1,1,1] = true", function() {
        var input = [1,1,1,1];
        var output = true;
        expect(answer.v1(input)).toEqual(output);
    });
    
});
