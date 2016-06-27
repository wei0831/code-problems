/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */
var Implemention = require('../code/main');
var answer = new Implemention();

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("Two Sorted Array Test Cases", function() {
    "use strict";

    it("Input [],[] = 0", function() {
        var input1 = [];
        var input2 = [];
        var output = 0;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1,2,3,4,5,6,7,8,9],[] = 5", function() {
        var input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var input2 = [];
        var output = 5;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [],[1,2,3,4,5,6,7,8,9] = 5", function() {
        var input1 = [];
        var input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var output = 5;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1],[] = 1", function() {
        var input1 = [1];
        var input2 = [];
        var output = 1;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1],[1] = 1", function() {
        var input1 = [1];
        var input2 = [1];
        var output = 1;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1],[1,2] = 1", function() {
        var input1 = [1];
        var input2 = [1, 2];
        var output = 1;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [3],[1,2] = 2", function() {
        var input1 = [3];
        var input2 = [1, 2];
        var output = 2;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1,2,3],[4,5,6] = 3.5", function() {
        var input1 = [1, 2, 3];
        var input2 = [4, 5, 6];
        var output = 3.5;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1,3,5],[2,4,6] = 3.5", function() {
        var input1 = [1, 3, 5];
        var input2 = [2, 4, 6];
        var output = 3.5;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [3,5,7],[1,2,3,4] = 3", function() {
        var input1 = [3, 5, 7];
        var input2 = [1, 2, 3, 4];
        var output = 3;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [2,2,2],[2,2,2] = 2", function() {
        var input1 = [2, 2, 2];
        var input2 = [2, 2, 2];
        var output = 2;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [2,2,2],[2,2,2,2] = 2", function() {
        var input1 = [2, 2, 2];
        var input2 = [2, 2, 2, 2];
        var output = 2;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1,2,3],[1,2,3] = 2", function() {
        var input1 = [1, 2, 3];
        var input2 = [1, 2, 3];
        var output = 2;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1,2,3],[1,2,3,4] = 2", function() {
        var input1 = [1, 2, 3];
        var input2 = [1, 2, 3, 4];
        var output = 2;

        expect(answer.result(input1, input2)).toEqual(output);
    });

    it("Input [1,2,3],[1,2,3,4] = 2", function() {
        var input1 = [1, 2, 3];
        var input2 = [1, 2, 3, 4];
        var output = 2;

        expect(answer.result(input1, input2)).toEqual(output);
    });

});

describe("Two Random Sorted Array Test Cases", function() {
    "use strict";
    var input1 = [];
    var input2 = [];
    var output;
    var i;
    var getRandomIntInclusive = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var shuffle = function(array) {
        var currentIndex = array.length;
        var temporaryValue;
        var randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    for (i = 0; i < getRandomIntInclusive(10, 30); ++i) {
        input1.push(getRandomIntInclusive(10, 30));
    }
    input1.sort();
    var half = Math.floor(input1.length / 2);
    output = (input1.length % 2) ? input1[half] : (input1[half - 1] + input1[half]) / 2;
    shuffle(input1);
    input2 = input1.splice(0, getRandomIntInclusive(0, input1.length));
    input1.sort();
    input2.sort();

    it("Input [" + input1 + "], [" + input2 + "] = " + output, function() {
        expect(answer.result(input1, input2)).toEqual(output);
    });

});
