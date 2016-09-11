/**
 *
 * @author Jack Chang
 */

/**
 * Implementation class
 *
 * @class
 * @param {number} N
 */
function Implementation(N) {
    "use strict";
    var board;
    var size = N || 8;
    var totalSpace = size * size;

    /**
     * Init - make board
     *
     * @function
     */
    var _init = function() {
        board = new Array(size);
        for (var i = 0; i < board.length; ++i) {
            board[i] = new Array(size);
            board[i].fill(0);
        }
    };

    /**
     * Print board
     *
     * @function
     */
    var printBoard = function() {
        for (var j = 0; j < size; ++j) {
            var s = "";
            for (var i = 0; i < size; ++i) {
                if (board[i][j] < 10) {
                    s += "0";
                }
                s += board[i][j] + " ";

            }
            console.log(s);
        }
        console.log();
    };

    /**
     * private Function
     *
     * @function
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    var canMove = function(x, y) {
        return x >= 0 && x < size && y >= 0 && y < size && board[x][y] === 0;
    };

    /**
     * Recursive Checking Path
     *
     * @function
     * @param {number} x
     * @param {number} y
     * @param {number} step
     * @return {boolean}
     */
    var tour = function(x, y, step) {
        // Found Answer
        if (step === totalSpace) {
            board[x][y] = step;
            return true;
        }

        board[x][y] = step;

        // Top Right Top
        if (canMove(x - 1, y - 2) && tour(x - 1, y - 2, step + 1)) {
            return true;
        }
        // Top Right Bot
        if (canMove(x - 2, y - 1) && tour(x - 2, y - 1, step + 1)) {
            return true;
        }
        // Bot Right Top
        if (canMove(x - 2, y + 1) && tour(x - 2, y + 1, step + 1)) {
            return true;
        }
        // Bot Right Bot
        if (canMove(x - 1, y + 2) && tour(x - 1, y + 2, step + 1)) {
            return true;
        }
        // Top Left Top
        if (canMove(x + 1, y + 2) && tour(x + 1, y + 2, step + 1)) {
            return true;
        }
        // Top Left Bot
        if (canMove(x + 2, y + 1) && tour(x + 2, y + 1, step + 1)) {
            return true;
        }
        // Bot Left Top
        if (canMove(x + 2, y - 1) && tour(x + 2, y - 1, step + 1)) {
            return true;
        }
        // Bot Left Bot
        if (canMove(x + 1, y - 2) && tour(x + 1, y - 2, step + 1)) {
            return true;
        }

        board[x][y] = 0;

        return false;
    };

    /**
     * private Function
     *
     * @function
     * @return {boolean}
     */
    var solve = function() {
        return tour(0, 0, 1);
    };

    _init();
    return {
        v1: solve,
        print: printBoard
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    // CAUTION: It takes a while to get answer....
    var answer = new Implementation(8);
    answer.v1();
    answer.print();
}());

module.exports = Implementation;
