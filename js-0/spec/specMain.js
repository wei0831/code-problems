/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */
var Implemention = require('../code/main');

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });

    it('confirms that we can load implemention', function() {
        var answer = new Implemention();
        expect(answer.result()).toBe(true);
    });
});
