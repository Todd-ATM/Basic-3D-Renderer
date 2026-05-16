const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const pointSize = 10;
const canvasWidth = 800;
const canvasHeight = 800;

//draw point rectange filled at center position x, y
function drawPoint(x, y) {
    const point = math(x, y);
    ctx.fillRect(point.x - pointSize/2, point.y - pointSize/2, pointSize, pointSize)
}

//take math coordinates and convert to canvas coordinates
function math(x, y) {
    const screenX = x + canvasWidth / 2;
    const screenY = canvasHeight / 2 - y;

    return {
        x: screenX,
        y: screenY
    }
}

drawPoint(0, 0);
drawPoint(100, 0);
drawPoint(-100, 0);
drawPoint(0, 100);
drawPoint(0, -100);