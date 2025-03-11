function getUniqueTile(length, arr) {
    let tile = Math.floor(Math.random() * length);
    while (arr.includes(tile)) {
        tile = Math.floor(Math.random() * length);
    }
    return tile;
}

export function makeGame(arr) {
    let boardLength = arr.length * 2;
    let board = new Array(boardLength);
    let tiles = [];
    for (let i = 0; i < boardLength; i++) {
        let tile = getUniqueTile(boardLength, tiles);
        tiles.push(tile);
    }
    for (let i = 0; i < arr.length; i++) {
        board[tiles[2 * i]] = arr[i];
        board[tiles[2 * i + 1]] = arr[i];
    }
    return board;
}