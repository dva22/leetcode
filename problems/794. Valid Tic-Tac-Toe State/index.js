// Source : https://leetcode.com/problems/valid-tic-tac-toe-state/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player always places "X" characters, while the second player always places "O" characters.
"X" and "O" characters are always placed into empty squares, never filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Example 1:
Input: board = ["O  ", "   ", "   "]
Output: false
***/

var validTicTacToe = module.exports= function(board) {
	let xCount = 0, oCount = 0;

	let arr = [];

	for (let i = 0; i < 3; i++) 
		for (let j = 0; j < 3; j++) { 
			arr[i * 3 + j] = board[i].charAt(j); 
			if (arr[i * 3 + j]  == 'X') xCount++;
			if (arr[i * 3 + j]  == 'O') oCount++;
		}    

	let winState = getWinState(arr[0], arr[4], arr[8]);
	winState += getWinState(arr[6], arr[4], arr[2]);

	for (let i = 0; i < 3; i++) {
		winState += getWinState(arr[i*3], arr[i*3+1], arr[i*3+2]);
		winState += getWinState(arr[i], arr[i+3], arr[i+6]);
	}

	return (winState%10 == 0 && oCount == xCount) || (winState < 3 && oCount+1 == xCount);
	
	function  getWinState(c1, c2, c3) {
		if (c1 != ' ' && c1 == c2 && c2 == c3) return c1 == 'X' ? 1 : 10;
			else return 0;
		}
};