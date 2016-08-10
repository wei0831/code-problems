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

    it("Input [1,1,1,1,2], 1 = [1]", function() {
        var input = [1, 1, 1, 1, 2];
        var k = 1;
        var output = [1];

        var result = answer.v1(input, k);
        expect(result.length).toEqual(output.length);
        expect(result.sort()).toEqual(output.sort());
    });

    it("Input [-1,-1,-1,1,2], 1 = [-1]", function() {
        var input = [-1, -1, -1, 1, 2];
        var k = 1;
        var output = [-1];

        var result = answer.v1(input, k);
        expect(result.length).toEqual(output.length);
        expect(result.sort()).toEqual(output.sort());
    });

    it("Input [6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], 6 = [-3,-4,4,0,1,9]", function() {
        var input = [6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0];
        var k = 6;
        var output = [-3, -4, 4, 0, 1, 9];

        var result = answer.v1(input, k);
        expect(result.length).toEqual(output.length);
        expect(result.sort()).toEqual(output.sort());
    });

});
