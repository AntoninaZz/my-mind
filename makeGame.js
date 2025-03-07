export function makeGame(arr) {
    let board = [];
    switch (arr.length) {
        case 2:
            board = new Array(4);
            let first = Math.floor(Math.random() * 4);
            let second = Math.floor(Math.random() * 4);
            while (first == second) {
                second = Math.floor(Math.random() * 4);
            }
            for (let i = 0; i < board.length; i++) {
                if (i == first || i == second) {
                    board[i] = arr[0];
                } else { board[i] = arr[1]; }
            }
            break;
    }
    return board;
}