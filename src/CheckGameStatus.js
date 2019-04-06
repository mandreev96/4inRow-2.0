export default function (field) {
    const HORIZONTAL = field.length;
    const VERTICAL = field[0].length;
    const FIRST_PLAYER = 1;
    const SECOND_PLAYER = 2;
    const DEFAULT_CELL = 0;
    const WIN = 4;
    const WIN_FIRST_PLAYER = 'WIN_FIRST_PLAYER';
    const WIN_SECOND_PLAYER = 'WIN_SECOND_PLAYER';

    let firstPlayer = 0;
    let secondPlayer = 0;

    function clearPoints() {
        firstPlayer = 0;
        secondPlayer = 0;
    }

    function increasePoints(cell) {
        if (cell === FIRST_PLAYER) {
            firstPlayer += 1;
            secondPlayer = 0;
        } else if (cell === SECOND_PLAYER) {
            secondPlayer += 1;
            firstPlayer = 0;
        } else {
            clearPoints();
        }
    }

    function checkResult() {
        if (firstPlayer === WIN) return WIN_FIRST_PLAYER;
        if (secondPlayer === WIN) return WIN_SECOND_PLAYER;
    }

    function vertical() {
        for (const column of field) {
            clearPoints();
            for (const cell of column) {
                increasePoints(cell);
                if (checkResult()) return checkResult();
            }
        }
    }
    if (vertical()) return vertical();

    function horizontal() {
        for (let j = 0; j < VERTICAL; j++) {
            clearPoints();
            for (let i = 0; i < HORIZONTAL; i++) {
                const cell = field[i][j];
                increasePoints(cell);
                if (checkResult()) return checkResult();
            }
        }
    }
    if (horizontal()) return horizontal();

    function diagonalLeftToRight() {
        for (let i = 0; i <= HORIZONTAL - WIN; i++) {
            for (let j = 0; j <= VERTICAL - WIN; j++) {
                clearPoints();
                const cell = field[i][j];
                if (cell !== DEFAULT_CELL) {
                    for (let k = 0; k < WIN; k++) {
                        const cell = field[i+k][j+k];
                        increasePoints(cell);
                        if (checkResult()) return checkResult();
                    }
                }
            }
        }
    }
    if (diagonalLeftToRight()) return diagonalLeftToRight();

    function diagonalRightToLeft() {
        for (let i = WIN - 1; i < HORIZONTAL; i++) {
            for (let j = 0; j <= VERTICAL - WIN; j++) {
                clearPoints();
                const cell = field[i][j];
                if (cell !== DEFAULT_CELL) {
                    for (let k = 0; k < WIN; k++) {
                        const cell = field[i-k][j+k];
                        increasePoints(cell);
                        if (checkResult()) return checkResult();
                    }
                }
            }
        }
    }
    if (diagonalRightToLeft()) return diagonalRightToLeft();

}
