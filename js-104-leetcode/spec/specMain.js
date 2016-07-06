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

describe("Some Test", function() {
    "use strict";

    it("expects true to be true", function() {
        expect(answer.v1()).toEqual(true);
    });

});
