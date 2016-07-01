/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
 */

var BinaryHeap = require('../code/binaryheap');

describe("Test Code Problem", function() {
    "use strict";

    it("expects true to be true ", function() {
        expect(true).toBe(true);
    });
});

describe("BinaryHeap: Default Min-Heap, Storing Integer", function() {
    "use strict";

    it("Size start with 0", function() {
        var bh = new BinaryHeap();
        var output = 0;

        expect(bh.size()).toEqual(output);
    });

    it("Push [3], Top = 3 Size = 1", function() {
        var bh = new BinaryHeap();
        var input = [3];
        var top = 3;
        var size = 1;

        input.forEach(function(x) {
            bh.push(x);
        });

        expect(bh.peek()).toEqual(top);
        expect(bh.size()).toEqual(size);
    });

    it("Push [-1,0,1], Top = -1 Size = 3", function() {
        var bh = new BinaryHeap();
        var input = [-1, 0, 1];
        var top = -1;
        var size = 3;

        input.forEach(function(x) {
            bh.push(x);
        });

        expect(bh.peek()).toEqual(top);
        expect(bh.size()).toEqual(size);
    });

    it("Push [1,2,3], Top = 1 Size = 3", function() {
        var bh = new BinaryHeap();
        var input = [1, 2, 3];
        var top = 1;
        var size = 3;

        input.forEach(function(x) {
            bh.push(x);
        });

        expect(bh.peek()).toEqual(top);
        expect(bh.size()).toEqual(size);
    });

    it("Push [3,2,1], Top = 1 Size = 3", function() {
        var bh = new BinaryHeap();
        var input = [3, 2, 1];
        var top = 1;
        var size = 3;

        input.forEach(function(x) {
            bh.push(x);
        });

        expect(bh.peek()).toEqual(top);
        expect(bh.size()).toEqual(size);
    });

    it("Pop Empty Heap = null", function() {
        var bh = new BinaryHeap();
        var output = null;

        expect(bh.pop()).toEqual(output);
    });

    it("Push[1] Pop, Output = 1 Size = 0", function() {
        var bh = new BinaryHeap();
        var output = 1;
        var size = 0;

        bh.push(1);
        expect(bh.size()).toEqual(1);

        expect(bh.pop()).toEqual(output);
        expect(bh.size()).toEqual(size);
    });

    it("Push[3,2,1] Pop Pop Pop", function() {
        var bh = new BinaryHeap();
        var input = [3, 2, 1];

        input.forEach(function(x) {
            bh.push(x);
        });

        expect(bh.pop()).toEqual(1);
        expect(bh.size()).toEqual(2);

        expect(bh.pop()).toEqual(2);
        expect(bh.size()).toEqual(1);

        expect(bh.pop()).toEqual(3);
        expect(bh.size()).toEqual(0);
    });

    it("Push[5, 2, 1, 7, 8, 6, 4, 3] Pop All", function() {
        var bh = new BinaryHeap();
        var input = [5, 2, 1, 7, 8, 6, 4, 3];

        input.forEach(function(x) {
            bh.push(x);
        });

        expect(bh.pop()).toEqual(1);
        expect(bh.pop()).toEqual(2);
        expect(bh.pop()).toEqual(3);
        expect(bh.pop()).toEqual(4);
        expect(bh.pop()).toEqual(5);
        expect(bh.pop()).toEqual(6);
        expect(bh.pop()).toEqual(7);
        expect(bh.pop()).toEqual(8);
    });

    it("Raw [0, 5, 2, 1, 7, 3, 6, 4, 8] Heapify Pop All", function() {
        var bh = new BinaryHeap();
        var input = [0, 5, 2, 1, 7, 3, 6, 4, 8];

        input.forEach(function(x) {
            bh._heap.push(x);
        });

        bh._heapify();

        expect(bh.pop()).toEqual(0);
        expect(bh.pop()).toEqual(1);
        expect(bh.pop()).toEqual(2);
        expect(bh.pop()).toEqual(3);
        expect(bh.pop()).toEqual(4);
        expect(bh.pop()).toEqual(5);
        expect(bh.pop()).toEqual(6);
        expect(bh.pop()).toEqual(7);
        expect(bh.pop()).toEqual(8);
    });

});
