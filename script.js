const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, fillCircle);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

const drawBee = function(x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'Black';
    ctx.fillStyle = 'Gold';

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
};

const update = function(coordinate) {
    const offset = Math.random() * 4 - 2;
    coordinate += offset;
    if (coordinate > 200) {
        coordinate = 200;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }
    return coordinate;
};

let x = 100;
let y = 100;

setInterval(function() {
    ctx.clearRect(0, 0, 200, 200);
    drawBee(x, y);
    x = update(x);
    y = update(y);
    ctx.strokeRect(0, 0, 200, 200);
}, 30);