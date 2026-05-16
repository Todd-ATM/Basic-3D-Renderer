const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const pointSize = 10;

//draw point rectange filled at center position x, y
function drawPoint(x, y) {
    ctx.fillRect(x - pointSize/2, y - pointSize/2, pointSize, pointSize)
}

