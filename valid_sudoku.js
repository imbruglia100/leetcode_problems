// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// medium

const isValidSudoku = (board) => {

    for(let i = 0; i < board.length; i++){
        let key = new Set()
        for(let j = 0; j < board[i].length; j++){
            if(key.has(board[i][j])){
                return false
            }else if(board[i][j] !== '.'){
                key.add(board[i][j])
            }
        }
        console.log("Horizontal:", key)
        key = new Set()
        for(let k = 0; k < board.length; k++){
            if(key.has(board[k][i])){
                return false
            }else if(board[k][i] !== '.'){
                key.add(board[k][i])
            }
        }
        console.log("Vertical:", key)


    }
    key = new Set()
    for(let v = 0; v < board.length; v++){
        if(key.has(board[v][i])){
            return false
        }else if(board[v][i] !== '.'){
            key.add(board[k][i])
        }
    }
    return true
}



let board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

// Output: true
console.log(4%3)
// console.log(isValidSudoku(board))
