window.onload = function () {
    var canvas = document.getElementById("tshirtCanvas");
    if (canvas.getContext) {
        drawCanvas(canvas);
    } else {
        alert("Hey, you, yes you, upgrade your browser!!");
    }
}

function drawCanvas(canvas) {
    var context = canvas.getContext("2d");
    context.fillRect(10, 10, 100, 100);
}