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

    it("Test Number 0 ~ 10000", function() {

        for (var i = 0; i <= 10000; ++i) {
            var input = i;
            var output = 1 + (i - 1) % 9;
            expect(answer.v1(input)).toEqual(output);
        }
    });

});
