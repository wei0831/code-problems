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

describe("V1 Normal Input", function() {
    "use strict";

    it("Input '' = '' ", function() {
        var input = "";
        var output = "";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'a' = 'a' ", function() {
        var input = "a";
        var output = "a";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'ab' = 'ba' ", function() {
        var input = "ab";
        var output = "ba";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input '1' = '1' ", function() {
        var input = "1";
        var output = "1";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input '12' = '21' ", function() {
        var input = "12";
        var output = "21";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'abc' = 'cba' ", function() {
        var input = "abc";
        var output = "cba";

        expect(answer.v1(input)).toEqual(output);
    });

    it("Input 'abcedfghijklmnopqrstuvwxyz' = 'zyxwvutsrqponmlkjihgfdecba' ", function() {
        var input = "abcedfghijklmnopqrstuvwxyz";
        var output = "zyxwvutsrqponmlkjihgfdecba";

        expect(answer.v1(input)).toEqual(output);
    });

});
