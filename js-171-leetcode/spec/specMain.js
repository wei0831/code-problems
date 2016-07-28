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

    it("Input A-Z", function() {
        for (var i = 1; i <= 26; ++i) {
            var input = String.fromCharCode('A'.charCodeAt(0) + i - 1);
            var output = i;
            expect(answer.v1(input)).toEqual(output);
        }
    });

    it("Input AA-ZZ", function() {
        for (var i = 1; i <= 26; ++i) {
            var firstLetter = String.fromCharCode('A'.charCodeAt(0) + i - 1);
            for (var j = 1; j <= 26; ++j) {
                var input = firstLetter + String.fromCharCode('A'.charCodeAt(0) + j - 1);
                var output = j + 26 * i;
                expect(answer.v1(input)).toEqual(output);
            }
        }
    });

    it("Input AAA-ZZZ", function() {
        for (var i = 1; i <= 1; ++i) {
            var firstLetter = String.fromCharCode('A'.charCodeAt(0) + i - 1);
            for (var j = 1; j <= 1; ++j) {
                var secondLetter = firstLetter + String.fromCharCode('A'.charCodeAt(0) + j - 1);
                for (var k = 1; k <= 1; ++k) {
                    var input = secondLetter + String.fromCharCode('A'.charCodeAt(0) + k - 1);
                    var output = k + 26 * j + 26 * 26 * i;
                    expect(answer.v1(input)).toEqual(output);
                }
            }
        }
    });
});
