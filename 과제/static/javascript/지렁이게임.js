const board = [  // 14행 21열
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let snake = [{ x: 10, y: 6 }];
let direction = 0;  // 초기에는 방향이 null
let food = null;

$(function() {
    renderBoard();
    generateFood();

    $(document).keyup(function(event) {
        switch(event.keyCode) {
            case 87: direction = { x: 0, y: -1 }; break; // W
            case 65: direction = { x: -1, y: 0 }; break; // A
            case 68: direction = { x: 1, y: 0 }; break;  // D
            case 63: direction = { x: 0, y: 1 }; break; // S
        }
    });

    setInterval(gameLoop, 200);
});

function renderBoard() {
    let out = "<table>";
    for (let i = 0; i < board.length; i++) {
        out += "<tr>";
        for (let k = 0; k < board[i].length; k++) {
            let tdClass = "wall";
            if (board[i][k] == 0) tdClass = "blank";
            if (board[i][k] == 2) tdClass = "me";
            if (food && food.x == k && food.y == i) tdClass = "food";
            out += `<td class="${tdClass}"></td>`;
        }
        out += "</tr>";
    }
    out += "</table>";
    $("#wrap").html(out);
}

function gameLoop() {
    if (direction === null) return;

    let head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (board[head.y][head.x] == 1 || snake.some(s => s.x == head.x && s.y == head.y)) {
        alert("Game Over!");
        location.reload();
    } else {
        snake.unshift(head);
        if (head.x == food.x && head.y == food.y) {
            generateFood();
        } else {
            let tail = snake.pop();
            board[tail.y][tail.x] = 0;
        }

        board[head.y][head.x] = 2;
        renderBoard();
    }
}

function generateFood() {
    let emptyCells = [];
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] == 0 && !snake.some(s => s.x == x && s.y == y)) {
                emptyCells.push({ x: x, y: y });
            }
        }
    }
    food = emptyCells[Math.floor(Math.random() * emptyCells.length)];
}