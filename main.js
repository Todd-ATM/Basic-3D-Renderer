const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const pointSize = 10;
const canvasWidth = 800;
const canvasHeight = 800;

//draw point rectange filled at center position x, y
function drawPoint(x, y) {
    ctx.fillRect(x - pointSize/2, y - pointSize/2, pointSize, pointSize)
}

//take canvas coordinates x y and convert to math coordinate system, return object
function math(x, y) {
    const screenX = x + canvasWidth / 2;
    const screenY = canvasHeight / 2 - y;

    return {
        x: screenX,
        y: screenY
    }
}

const p = math(0, 0);
console.log(p);