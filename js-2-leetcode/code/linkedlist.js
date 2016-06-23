function LinkedList(val) {
    "use strict";
    this.val = val;
    this.next = null;
}

LinkedList.prototype.toArray = function() {
    "use strict";
    var c = this;
    var result = [];
    while (c !== null) {
        result.push(c.val);
        c = c.next;
    }
    return result;
};

// Export Functions
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = LinkedList;
}
