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

    it("Input [1,1,1,1,1] = [1,1,1,1,1]", function() {
        var input = [1, 1, 1, 1, 1];
        var output = [1, 1, 1, 1, 1];
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input [0,1,2] = [2,0,0]", function() {
        var input = [0, 1, 2];
        var output = [2, 0, 0];
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input [2,2] = [2,2]", function() {
        var input = [2, 2];
        var output = [2, 2];
        expect(answer.v1(input)).toEqual(output);
    });

    it("Input [2,3,4] = [12,8,6]", function() {
        var input = [2, 3, 4];
        var output = [12, 8, 6];
        expect(answer.v1(input)).toEqual(output);
    });

});
