/**
 * @author Jack Chang
 */

var Implementation = require('../code/main');
var answer = new Implementation();
var countBits = function(i) {
    "use strict";
    i = i - ((i >> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >> 2) & 0x33333333);
    return (((i + (i >> 4)) & 0x0F0F0F0F) * 0x01010101) >> 24;
};

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("V1 Test Cases", function() {
    "use strict";

    it("Num 0~1000", function() {
        for (var i = 0; i <= 1000; ++i) {
            var a = answer.v1(i);
            expect(a.length).toBe(i + 1);
            expect(a[i]).toBe(countBits(i));
        }
    });

});
