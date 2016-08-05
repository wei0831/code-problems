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

    it("Input 0 = 0", function() {
        var input = 0;
        var output = 0;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 1 = 1", function() {
        var input = 1;
        var output = 1;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 7 = 3", function() {
        var input = 7;
        var output = 3;
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 2147483648 = 1", function() {
        var input = 2147483648;
        var output = 1;
        expect(answer.v1(input)).toEqual(output);
    });

});
