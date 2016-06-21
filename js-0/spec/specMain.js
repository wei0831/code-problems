/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */
var implemention = require('../code/main');

describe("Test Code Problem", function() {
    "use strict";

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it('confirms that we can load implemention', function() {
        var answer = new implemention();
        expect(answer.result()).toBe(true);
    });
});
