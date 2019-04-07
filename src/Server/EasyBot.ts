export default function (field) {
    const moves = [];
    for (let i = 0; i < field.length; i++) {
        const column = field[i];
        if (column.lastIndex(0) !== -1) {
            moves.push(i);
        }
    }
    return field[moves[randomMove(moves)]];
}

function randomMove(moves) {
    let rand = Math.random() * (moves.length);
    rand = Math.floor(rand);
    return rand;
}
