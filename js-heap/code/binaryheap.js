/**
 * Simple BinaryHeap with Array Implementationx
 * @author Jack Chang
 */

/**
 * BinaryHeap
 *
 * @class
 * @param {function} compareFunc - compare function: function(a, b) => boolean
 */
function BinaryHeap(compareFunc) {
    "use strict";

    /**
     * Default compare function is min compare
     * if a is the smallest, it will be the first element
     *
     * @private
     */
    this._compare = compareFunc || function(a, b) {
        return a < b;
    };

    /**
     * Heap Data
     *
     * @private
     */
    this._heap = [];
}

BinaryHeap.prototype = {

    /**
     * Insert Element in Heap
     *
     * @param {object} element to be inserted
     */
    push: function(element) {
        "use strict";
        this._heap.push(element);
        this._bubbleUp(this._heap.length - 1);
    },

    /**
     * Peek the top item in heap
     *
     * @return {object} Top Item in Heap
     */
    peek: function() {
        "use strict";
        return this._heap[0];
    },

    /**
     * Return Size of heap
     *
     * @return {number} size of heap
     */
    size: function() {
        "use strict";
        return this._heap.length;
    },

    /**
     * Remove and return the first item in the heap
     *
     * @return {object | null} the first item in the heap or null if empty
     */
    pop: function() {
        "use strict";
        if (this._heap.length === 0) {
            return null;
        } else {
            var result = this._heap[0];
            var end = this._heap.length - 1;
            this._heap[0] = this._heap[end];
            this._heap.length -= 1;

            if (this._heap.length > 1) {
                this._sinkDown(0);
            }

            return result;
        }
    },

    /**
     * Log the heap
     */
    log: function() {
        "use strict";
        console.log(this._heap);
    },

    /**
     * Bubble up from given index to corrent position
     */
    _bubbleUp: function(n) {
        "use strict";
        var element = this._heap[n];

        while (n > 0) {
            var parent_idx = Math.floor((n - 1) / 2);
            var parent = this._heap[parent_idx];

            // compare, if false condition then stop
            if (!this._compare(element, parent)) {
                break;
            }

            // swap and continue
            this._heap[parent_idx] = element;
            this._heap[n] = parent;
            n = parent_idx;
        }
    },

    /**
     * Sink Down from given index to corrent position
     */
    _sinkDown: function(n) {
        "use strict";
        var element = this._heap[n];

        while (true) {
            var left = n * 2 + 1;
            var right = left + 1;

            var swap = n;

            if (left < this._heap.length && this._compare(this._heap[left], this._heap[swap])) {
                swap = left;
            }

            if (right < this._heap.length && this._compare(this._heap[right], this._heap[swap])) {
                swap = right;
            }

            if (swap === n) {
                break;
            }

            this._heap[n] = this._heap[swap];
            this._heap[swap] = element;
            n = swap;
        }
    },

    _heapify: function() {
        "use strict";
        var length = this._heap.length;
        var lastParent = Math.floor(length / 2) - 1;

        for (var i = lastParent; i >= 0; --i) {
            this._sinkDown(i);
        }
    }

};

module.exports = BinaryHeap;
