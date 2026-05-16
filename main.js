const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const pointSize = 10;
const canvasWidth = 800;
const canvasHeight = 800;
const size = 100;

//draw point rectange filled at center position x, y
function drawPoint(x, y) {
    const point = math(x, y);
    ctx.fillRect(point.x - pointSize/2, point.y - pointSize/2, pointSize, pointSize)
}

//take math coordinates and convert to canvas coordinates
function math(x, y) {
    //take x and y and scale by size
    x = x * size;
    y = y * size;
    const screenX = x + canvasWidth / 2;
    const screenY = canvasHeight / 2 - y;

    return {
        x: screenX,
        y: screenY
    }
}

function drawLine(p1, p2) {
    //convert p1 and p2 to screen coordinates
    const point1 = math(p1.x, p1.y);
    const point2 = math(p2.x, p2.y);

    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);

    ctx.stroke();
}

function drawAxis() {
    const p1x = { x: -800, y: 0};
    const p2x = { x: 800, y: 0};

    const p1y = { x: 0, y: -800};
    const p2y = { x: 0, y: 800};

    ctx.strokeStyle = "green";
    drawLine(p1x, p2x);

    ctx.strokeStyle = "purple";
    drawLine(p1y, p2y);
}

drawAxis();

drawPoint(0, 0);
drawPoint(1, 0);
drawPoint(-1, 0);
drawPoint(0, 1);
drawPoint(0, -1);