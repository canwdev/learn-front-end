window.onload = function () {
    var button = document.getElementById("previewButton");

    updateTweets(tweets);
    previewHandler();

    button.onclick = previewHandler;

    makeImage();
    //bgCanvas();
    //setInterval("bgCanvas()", 5000);
}

tweets = Array("if it’s worth tweeting, it’s worth printing on a tweetshirt!", "Hello, world", "HTML5 Canvas!", "Simplicity is the peak of civilization", "Where is my Google?");

function previewHandler() {
    bgCanvas();

    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    fillBackgroundColor(canvas, context);

    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;

    if (shape == "squares") {
        for (var squares = 0; squares < 20; squares++) {
            drawSquare(canvas, context);
        }
    } else if (shape == "circles") {
        for (var i = 0; i < 20; i++) {
            drawCircle(canvas, context);
        }
    } else {
        drawBird(canvas, context);
    }
    drawText(canvas, context);

}

function drawSquare(canvas, context) {
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w);
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function drawCircle(canvas, context) {
    var r = Math.floor(Math.random() * 35);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.beginPath();
    context.arc(x, y, r, 0, degreesToRadians(360), true);
    context.fillStyle = "lightblue";
    context.fill();
}

function updateTweets(tweets) {
    var tweetsSelection = document.getElementById("tweets");
    for (var i = 0; i < tweets.length; i++) {
        var option = document.createElement("option");
        option.text = tweets[i];
        option.value = tweets[i];
        tweetsSelection.options.add(option);
    }
    tweetsSelection.selectedIndex = 0;
}

function drawText(canvas, context) {
    var selectObj = document.getElementById("foregroundColor");
    var index = selectObj.selectedIndex;
    var fgColor = selectObj[index].value;
    context.fillStyle = fgColor;

    context.font = "bold 1em sans-serif";
    context.textAlign = "left";
    context.fillText("I saw this tweet", 20, 40);

    selectObj = document.getElementById("tweets");
    index = selectObj.selectedIndex;
    var tweet = selectObj[index].value;
    context.font = "italic bold 0.9em Arial";
    context.fillText(tweet, 50, 100);

    context.font = "bold 1em sans-serif";
    context.textAlign = "right";
    context.fillText("and all I got was this lousy t-shirt!",
        canvas.width - 20, canvas.height - 40);
}

function drawBird(canvas, context) {
    var twitterBird = new Image();
    twitterBird.src = "img.png"
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    if (bgColor == "white") {
        twitterBird.onload = function () {
            context.drawImage(twitterBird, 20, 120, 70, 70);
        }
    }

}

function fillBackgroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function bgCanvas() {
    var canvas = document.getElementById('bgcanvas');
    var context = canvas.getContext('2d');
    canvas.width = canvas.parentNode.offsetWidth;
    canvas.height = canvas.parentNode.offsetHeight;
    fillBackgroundColor(canvas, context);
//    for (var squares = 0; squares < 20; squares++) {
//            drawSquare(canvas, context);
//        }
}

function makeImage() {
    var canvas = document.getElementById("tshirtCanvas");
    canvas.onclick = function () {
        window.location = canvas.toDataURL("image/png");
    }
}
