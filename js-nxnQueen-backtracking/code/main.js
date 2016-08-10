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
    var size = N || 4;

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
     * @param {number} col
     * @param {number} row
     * @return {boolean}
     */
    var canPlace_v1 = function(col, row) {
        var i;
        var j;

        // Vertical
        for (i = 0; i < size; ++i) {
            if (board[col][i] === 1) {
                return false;
            }
        }

        // Horizontal
        for (i = 0; i < size; ++i) {
            if (board[i][row] === 1) {
                return false;
            }
        }

        // Left Top
        for (i = col, j = row; i >= 0 && j >= 0; --i, --j) {
            if (board[i][j] === 1) {
                return false;
            }
        }

        // Right Top
        for (i = col, j = row; i < size && j < size; ++i, ++j) {
            if (board[i][j] === 1) {
                return false;
            }
        }

        // Left Bot
        for (i = col, j = row; i >= 0 && j < size; --i, ++j) {
            if (board[i][j] === 1) {
                return false;
            }
        }

        // Right Bot
        for (i = col, j = row; i < size && j >= 0; ++i, --j) {
            if (board[i][j] === 1) {
                return false;
            }
        }

        return true;
    };

    /**
     * private Function
     *
     * @function
     * @param {number} n
     * @param {number} queen
     * @return {boolean}
     */
    var solve_v1 = function(n, queen) {
        n = n || 0;
        queen = queen || size;

        if (n === queen) {
            return true;
        }

        for (var i = 0; i < size; ++i) {
            if (canPlace_v1(i, n)) {
                // Try this Path
                board[i][n] = 1;

                if (solve_v1(n + 1, queen)) {
                    return true;
                }

                // This Path Won't Work
                board[i][n] = 0;
            }
        }

        return false;
    };

    _init();
    return {
        v1: solve_v1,
        print: printBoard
    };
}

/**
 * Main
 */
(function() {
    "use strict";

    var answer = new Implementation(4);
    if (answer.v1()) {
        console.log("Found Answer!");
        answer.print();
    } else {
        console.log("Did NOT Find Answer!");
    }
}());

module.exports = Implementation;
